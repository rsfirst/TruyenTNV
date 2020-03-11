package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fss.util.StringUtil;
import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import vn.com.fis.model.css.InputAgentAction;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

@Service
@Transactional
public class AgentBusiness {
	Logger logger = LoggerFactory.getLogger(getClass());
	private final int colNum = 20;

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public List<String> getListFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
		String nomeMetodo = ".getListFromFileTemplate() ";
		logger.info(logger.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());
		List<String> lstISDN = new ArrayList<>();
		try {
			Workbook workbook = WorkbookFactory.create(fileInput);
			Sheet sheet = workbook.getSheetAt(0);
			Iterator<Row> iteratorRow = sheet.iterator();
			iteratorRow.next();
			while (iteratorRow.hasNext()) {
				Row row = iteratorRow.next();
				Iterator<Cell> iteratorCell = row.cellIterator();
				String rowStr = "";
				int i = 0;
				while (iteratorCell.hasNext() && i < colNum) {
					Cell cell = iteratorCell.next();
					String cellValue = StringUtil.nvl(CommonUtils.getCellValue(cell), "");
					rowStr += cellValue + ",";
					i++;
				}
				if (rowStr.endsWith(",")) {
					rowStr = rowStr.substring(0, rowStr.length() - 1);
				}
				if (!"".equals(rowStr.replace(",", ""))) {
					lstISDN.add(rowStr);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
			throw e;
		} finally {
			if (fileInput != null) {
				try {
					fileInput.close();
				} catch (IOException e) {
					e.printStackTrace();
					logger.error(e.getMessage());
					throw e;
				}
			}
		}
		logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstISDN;
	}

	public Map<String, Object> submitData(HttpServletRequest request, List<String> requestInput) throws Exception {
		String nomeMetodo = ".submitData()";
		logger.info(logger.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Map<String, Object> obj = new HashMap<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			InputAgentAction inputAgentAction = new InputAgentAction();
			inputAgentAction.setRequest(requestInput);
			String ip = vn.com.fis.utils.epos.StringUtil
					.getIpClient((Object) SecurityContextHolder.getContext().getAuthentication().getDetails());
			inputAgentAction.setIp(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputAgentAction);
			String url = ev.getProperty("login.url") + "/bs/agent/submitData";
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					obj = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}

		logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
		return obj;
	}

}
