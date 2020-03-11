package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.css.ReportEngineBusinessCSS;
import vn.com.fis.model.css.BrandedShopObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StaffObject;
import vn.com.fis.model.epos.AppDomainModel;
import vn.com.fis.model.mnpcm.ReportHistorySTK;
import vn.com.fis.report.css.RequestEformParam;
import vn.com.fis.report.epos.ReportRequestObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ReportEngineControllerCSS {
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ReportEngineBusinessCSS reportEngineBusinessCSS;

	private static final Logger LOG = LoggerFactory.getLogger(ReportEngineControllerCSS.class);

	// done
	@RequestMapping(value = Constants.ACTION_REPORTENGINE_CREATEREPORT, method = RequestMethod.GET)
	public ResponseEntity<?> createReport(HttpServletRequest request, @RequestParam(name = "m_param1") String m_param1,
			@RequestParam(name = "m_param2") String m_param2, @RequestParam(name = "m_param3") String m_param3,
			@RequestParam(name = "m_param4") String m_param4, @RequestParam(name = "m_param5") String m_param5,
			@RequestParam(name = "templateFile") String templateFile, @RequestParam(name = "fileType") String fileType,
			@RequestParam(name = "fileName") String fileName,
			@RequestParam(name = "destinationPath") String destinationPath,
			@RequestParam(name = "typeOfReport") String typeOfReport) {
		MessagesResponse msgResponse = new MessagesResponse();
		String nomeMetodo = ".createReport() ";
		ReportRequestObject response = new ReportRequestObject();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("m_param1", m_param1);
			params.put("m_param2", m_param2);
			params.put("m_param3", m_param3);
			params.put("m_param4", m_param4);
			params.put("m_param5", m_param5);
			params.put("templateFile", templateFile);
			params.put("fileType", fileType);
			params.put("fileName", fileName);
			params.put("destinationPath", destinationPath);
			params.put("typeOfReport", typeOfReport);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORTENGINE_CREATEREPORT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				response = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}

		return new ResponseEntity<ReportRequestObject>(response, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_REPORTENGINE_EXTRACTREPORT, method = RequestMethod.GET)
	public ResponseEntity<?> extractReport(HttpServletRequest request, @RequestParam(name = "fileType") String fileType,
			@RequestParam(name = "fileName") String fileName, @RequestParam(name = "typeOfReport") String typeOfReport,
			@RequestParam(name = "listParams") String listParams) {
		MessagesResponse msgResponse = new MessagesResponse();
		String nomeMetodo = ".extractReport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		FileSystemResource fileSystemResource = null;
		HttpHeaders headers = new HttpHeaders();

		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("fileType", fileType);
			params.put("fileName", fileName);
			params.put("typeOfReport", typeOfReport);
			params.put("listParams", listParams);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORTENGINE_EXTRACTREPORT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				fileSystemResource = jsonMapper.readValue(tmp.toString(), new TypeReference<FileSystemResource>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(CommonConstant.CREATE_REPORT_ERROR_CODE);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);

		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_BRANDEDSHOP_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getListBrandedShop(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getListBrandedShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<BrandedShopObject> list = new ArrayList<BrandedShopObject>();

		try {

			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_BRANDEDSHOP_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BrandedShopObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<BrandedShopObject>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_STAFF_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getListStaff(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getListStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> list = new ArrayList<StaffObject>();

		try {

			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_STAFF_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_INPUT_STOCK_FILE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_INPUT_STOCK + "')")
	public ResponseEntity<?> exportInputStockFile(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportInputStockFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_INPUT_STOCK_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_INPUT_STOCK_STAFF_FILE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_INPUT_STOCK_STAFF + "')")
	public ResponseEntity<?> exportInputStockStaffFile(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportInputStockStaffFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_INPUT_STOCK_STAFF_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_STOCK_FILE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_STOCK + "')")
	public ResponseEntity<?> exportStock(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_STOCK_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PREPAID }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PREPAID + "')")
	public ResponseEntity<?> exportPrepaid(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPrepaid() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PREPAID);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PREPAID_STAFF }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PREPAID_STAFF + "')")
	public ResponseEntity<?> exportPrepaidStaff(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPrepaidStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PREPAID_STAFF);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PREPAID_DETAIL }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PREPAID_DETAIL + "')")
	public ResponseEntity<?> exportPrepaidDetail(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPrepaidDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PREPAID_DETAIL);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PREPAID_REQUEST }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PREPAID_REQUEST + "')")
	public ResponseEntity<?> exportPrepaidRequest(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPrepaidRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PREPAID_REQUEST);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_CHANGE_SCRATCH_CARD }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_CHANGE_SCRATCH_CARD + "')")
	public ResponseEntity<?> exportChangeScratchCard(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportChangeScratchCard() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_CHANGE_SCRATCH_CARD);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_CHANGE_CARD_PHYSICAL }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_CHANGE_CARD_PHYSICAL + "')")
	public ResponseEntity<?> exportChangeCardPhysical(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportChangeCardPhysical() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_CHANGE_CARD_PHYSICAL);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_CHANGE_CUST_INFO }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_CHANGE_CUST_INFO + "')")
	public ResponseEntity<?> exportChangeCustInfo(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportChangeCustInfo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_CHANGE_CUST_INFO);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_LOGIN }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_LOGIN + "')")
	public ResponseEntity<?> exportLogin(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportLogin() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_LOGIN);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PORT_IN_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PORT_IN_MNP + "')")
	public ResponseEntity<?> exportPortInMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPortInMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PORT_IN_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PORT_OUT_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_PORT_OUT_MNP + "')")
	public ResponseEntity<?> exportPortOutMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPortOutMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_PORT_OUT_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_REVERSAL_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_REVERSAL_MNP + "')")
	public ResponseEntity<?> exportReversalMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportReversalMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_REVERSAL_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_RETURN_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_RETURN_MNP + "')")
	public ResponseEntity<?> exportReturnMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportReturnMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_RETURN_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_COMMITMENT_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_COMMITMENT_MNP + "')")
	public ResponseEntity<?> exportCommitmentMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportCommitmentMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_COMMITMENT_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_COMMITMENT_DETAIL_MNP }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_COMMITMENT_DETAIL_MNP + "')")
	public ResponseEntity<?> exportCommitmentDetailMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportCommitmentDetailMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_COMMITMENT_DETAIL_MNP);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_VIEW_DELIVER_ORDER_FILE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_DELIVER_ORDER + "')")
	public ResponseEntity<?> exportViewDeliverOrderFile(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportViewDeliverOrderFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);


		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.ACTION_EXPORT_VIEW_DELIVER_ORDER_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_FILE }, method = RequestMethod.GET)
	public ResponseEntity<?> exportFile(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.ACTION_EXPORT_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = {
			Constants.ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SEARCH_INFOMATION_SHOP_AND_STAFF + "')")
	public ResponseEntity<?> exportSearchInfomationShopAndStaffFile(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportSearchInfomationShopAndStaffFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_EFORM }, method = RequestMethod.POST)
	public ResponseEntity<?> exportEform(HttpServletRequest request, @RequestBody RequestEformParam requestParam) {
		String nomeMetodo = ".exportEform() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		FileSystemResource fileSystemResource = null;
		HttpHeaders headers = new HttpHeaders();

		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestParam);
			String url = ev.getProperty("login.url") + Constants.ACTION_EXPORT_EFORM;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				fileSystemResource = jsonMapper.readValue(tmp.toString(), new TypeReference<FileSystemResource>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);

	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_HISTORY_STK }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_HISTORY_STK + "')")
	public ResponseEntity<?> exportFileHistoryOfSTK(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportFileHistoryOfSTK() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_HISTORY_STK);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_REPORT_AIRTIME }, method = RequestMethod.GET)
	public ResponseEntity<?> exportFileReportAirTime(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportFileReportAirTime() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HttpHeaders headers = new HttpHeaders();
		FileSystemResource fileSystemResource = null;
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("reportInput", reportInput);
			String url = ev.getProperty("login.url") + Constants.ACTION_EXPORT_REPORT_AIRTIME;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				fileSystemResource = jsonMapper.readValue(tmp.toString(), new TypeReference<FileSystemResource>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_EFORM_PREPAID }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> exportPrepaidEform(HttpServletRequest request,
			@RequestBody RequestEformParam requestParam) {
		String nomeMetodo = ".exportPrepaidEform() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HttpHeaders headers = new HttpHeaders();
		FileSystemResource fileSystemResource = null;
		ReportRequestObject response= new ReportRequestObject();
		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(requestParam);
			String url = ev.getProperty("login.url") + Constants.ACTION_EXPORT_EFORM_PREPAID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				response = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}
			fileSystemResource= new FileSystemResource(response.getFile());
			
			headers.setContentType(MediaType.parseMediaType(response.getMimeType()));
			headers.set("MyDownloadFile", response.getFileName());
			headers.set("FileType", response.getFileType());

			List<String> listOfAccessControl = new ArrayList<String>();
			listOfAccessControl.add("MyDownloadFile");
			listOfAccessControl.add("FileType");

			headers.setAccessControlExposeHeaders(listOfAccessControl);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		}

		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_REQUEST_SERVICE_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getListChangeServiceRequest(HttpServletRequest request,
			@RequestParam(name = "type") String type) {
		String nomeMetodo = ".getListChangeServiceRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<AppDomainModel> list = new ArrayList<AppDomainModel>();

		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("type", type);
			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_REQUEST_SERVICE_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<AppDomainModel>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_NEW_REGISTER }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_NEW_REGISTER + "')")
	public ResponseEntity<?> exportNewRegister(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportNewRegister() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_NEW_REGISTER);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_INFO_CHANGE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_INFO_CHANGE + "')")
	public ResponseEntity<?> exportInfoChange(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportInfoChange() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_INFO_CHANGE);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	// Báo cáo chuyển nạp tiền
	@RequestMapping(value = { Constants.ACTION_EXPORT_TRANSFERS_AUMONT }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_TRANSFERS_AUMONT + "')")
	public ResponseEntity<?> exportTransfersAumont(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {

		String nomeMetodo = ".exportTransfersAumont() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_TRANSFERS_AUMONT);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_HISTORY_STK_1 }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_HIST_STK_1 + "')")
	public ResponseEntity<?> exportHistSTK_1(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportHistSTK_1() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_HISTORY_STK_1);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_HISTORY_STK_2 }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_HIST_STK_2 + "')")
	public ResponseEntity<?> exportHistSTK_2(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportHistSTK_2() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_HISTORY_STK_2);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_AIRTIME_ADJUSTMENT }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_AIRTIME_ADJUSTMENT + "')")
	public ResponseEntity<?> exportAirtimeAdjustment(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportAirtimeAdjustment() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_AIRTIME_ADJUSTMENT);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_TRANSFERS }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_TRANSFERS + "')")
	public ResponseEntity<?> exportTransfers(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportTransfers() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_TRANSFERS);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	/* Continue */
	@RequestMapping(value = { Constants.ACTION_EXPORT_ASSIGN_FOR_ASS }, method = RequestMethod.GET)
	public ResponseEntity<?> exportAssignForAssMNP(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportAssignForAssMNP() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput, Constants.ACTION_EXPORT_ASSIGN_FOR_ASS);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_PREORDER_BY_STATUS }, method = RequestMethod.GET)
	public ResponseEntity<?> exportPreOrderByStatus(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportPreOrderByStatus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.ACTION_EXPORT_PREORDER_BY_STATUS);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_AGENT_NAME }, method = RequestMethod.POST)
	public ResponseEntity<?> getAgentName(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn) {
		String nomeMetodo = ".getAgentName() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_AGENT_NAME;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);

			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_DDK }, method = RequestMethod.PUT)

	public ResponseEntity<?> getDDK(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn,
			@RequestParam(name = "startDate") String startDate, @RequestParam(name = "endDate") String endDate) {
		String nomeMetodo = ".getDDK() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String ddk = "";
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			params.put("startDate", startDate);
			params.put("endDate", endDate);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_DDK;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				ddk = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(ddk, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_TOTAL }, method = RequestMethod.POST)
	public ResponseEntity<?> getTotal(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn,
			@RequestParam(name = "startDate") String startDate, @RequestParam(name = "endDate") String endDate) {
		String nomeMetodo = ".getListStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();

		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			params.put("startDate", startDate);
			params.put("endDate", endDate);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_TOTAL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_LIST_RECORD }, method = RequestMethod.POST)
	public ResponseEntity<?> getListRecord(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn,
			@RequestParam(name = "startDate") String startDate, @RequestParam(name = "endDate") String endDate) {
		String nomeMetodo = ".getListStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReportHistorySTK> list = new ArrayList<ReportHistorySTK>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			params.put("startDate", startDate);
			params.put("endDate", endDate);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_LIST_RECORD;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReportHistorySTK>>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReportHistorySTK>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_CHECK_MSISDN }, method = RequestMethod.POST)
	public ResponseEntity<?> checkMsisdn(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn,
			@RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getListStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			params.put("shopId", shopId);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_CHECK_MSISDN;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.EXPORT_DV_HHPTTB + "')")
	public ResponseEntity<?> exportReversaCommissinoct(HttpServletRequest request,
			@RequestParam(value = "reportInput") String reportInput) {
		String nomeMetodo = ".exportReversaCommissinoct() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = reportEngineBusinessCSS.exportFile(request, reportInput,
					Constants.REQUEST_MAPPING.ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = {
			Constants.ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT_GETNAMESHOP }, method = RequestMethod.GET)
	public ResponseEntity<?> getNameShopReport(HttpServletRequest request,
			@RequestParam(name = "msisdn") String msisdn) {
		String nomeMetodo = ".getNameShopReport() ";
		MessagesResponse mess = new MessagesResponse();

		try {

			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);

			String url = ev.getProperty("login.url") + Constants.ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT_GETNAMESHOP;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPORT_GET_AGENT_NAME2 }, method = RequestMethod.PUT)
	public ResponseEntity<?> getAgentName2(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn) {
		String nomeMetodo = ".getAgentName2() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);

			String url = ev.getProperty("login.url") + Constants.ACTION_REPORT_GET_AGENT_NAME2;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);

			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}
}
