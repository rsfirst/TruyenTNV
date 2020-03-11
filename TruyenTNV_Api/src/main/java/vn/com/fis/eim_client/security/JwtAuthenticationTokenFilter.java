package vn.com.fis.eim_client.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

public class JwtAuthenticationTokenFilter extends OncePerRequestFilter
{

	private final Log logger = LogFactory.getLog(this.getClass());

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Value("${jwt.header}")
	private String tokenHeader;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException
	{
		if (request.getRequestURL().toString().indexOf("/login") == -1)
		{
			final String requestHeader = request.getHeader(this.tokenHeader);
			String username = null;
			String authToken = null;
			// String roles=null;
			if (requestHeader != null && requestHeader.startsWith("Bearer "))
			{
				authToken = requestHeader.substring(7);
				try
				{
					System.out.println("authToken: " + authToken);
					username = jwtTokenUtil.getUsernameFromToken(authToken);
				} catch (IllegalArgumentException e)
				{
					logger.error("an error occured during getting username from token", e);
				} catch (ExpiredJwtException e)
				{
					logger.warn("the token is expired and not valid anymore", e);
				}
			}
			if (username != null && SecurityContextHolder.getContext().getAuthentication() == null)
			{
				JwtUser user = new JwtUser(1l, username, "", "", "", "", AuthorityUtils.createAuthorityList(jwtTokenUtil.getRoleFromToken(authToken)), true,
						null, authToken);

				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		}

		chain.doFilter(request, response);
	}
}