package vn.com.fis.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

	private final Log logger = LogFactory.getLog(this.getClass());

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Value("${jwt.header}")
	private String tokenHeader;

	private final String IS_AUTHENTICATED = "isAuthenticated";

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		String requestPartent = "";
		String tmp = ((HttpServletRequest) request).getRequestURI();
		if (!tmp.equals("/")) {
			requestPartent = tmp.split("/")[1];
			if (checkURL(requestPartent)) {
				try {
					HttpSession session = request.getSession(false);
					if (session.getAttribute(IS_AUTHENTICATED) != null
							|| !"".equals(session.getAttribute(IS_AUTHENTICATED))) {
						System.out.println(session.getAttribute(IS_AUTHENTICATED).toString());
						if ("1".equals(session.getAttribute(IS_AUTHENTICATED).toString())) {
							String transEnti = session.getAttribute("transEntity").toString();
							JSONObject requestHeader = new JSONObject(transEnti);
							String username = null;
							String authToken = null;
							// String roles=null;
							if (requestHeader != null) {
								authToken = requestHeader.getString("transId");
								try {
									System.out.println("authToken: " + authToken);
									username = jwtTokenUtil.getUsernameFromToken(authToken);
								} catch (IllegalArgumentException e) {
									logger.error("an error occured during getting username from token", e);
									request.getRequestDispatcher("/account/login").forward(request, response);
									return;
								} catch (ExpiredJwtException e) {
									logger.warn("the token is expired and not valid anymore", e);
									request.getRequestDispatcher("/account/login").forward(request, response);
									return;
								}
							}
							if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
								JwtUser user = new JwtUser(1l, username, "", "", "", "",
										AuthorityUtils.createAuthorityList(jwtTokenUtil.getRoleFromToken(authToken)),
										true, null, authToken);

								UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
										user, null, user.getAuthorities());
								authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
								// logger.info("authenticated user " + username + ", setting security context");
								SecurityContextHolder.getContext().setAuthentication(authentication);
							} else {
								request.getRequestDispatcher("/account/login").forward(request, response);
								return;
							}
						} else {
							request.getRequestDispatcher("/account/login").forward(request, response);
							return;
						}
					} else {
						request.getRequestDispatcher("/account/login").forward(request, response);
						return;
					}
				} catch (Exception e) {
					e.printStackTrace();
					logger.error(e.getMessage());
					request.getRequestDispatcher("/account/login").forward(request, response);
					return;
				}
			}
		}

		chain.doFilter(request, response);
	}

	private boolean checkURL(String requserURL) {
		boolean result = true;

		ArrayList<String> listURL = new ArrayList<String>();
		listURL.add("/");
		listURL.add("account");
		listURL.add("i18n");
		listURL.add("assets");
		listURL.add("js");
		listURL.add("views");
		listURL.add("images");
		listURL.add("favicon.ico");
		listURL.add("css");
		listURL.add("errorAuthorities");
		listURL.add("check");
		listURL.add("popup");

		for (int i = 0; i < listURL.size(); i++) {
			if (requserURL.equals(listURL.get(i))) {
				result = false;
				break;
			}
		}

		return result;
	}

}
