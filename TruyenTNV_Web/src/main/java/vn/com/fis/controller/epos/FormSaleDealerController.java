package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.FormSaleDealerBusiness;
import vn.com.fis.business.epos.ReportEngineBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.FSDGoods;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.InputSerialModel;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.model.epos.ParamsSaleDealerObj;
import vn.com.fis.model.epos.PriceModel;
import vn.com.fis.model.epos.PromotionModel;
import vn.com.fis.model.epos.ReportInput;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormSaleDealerController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormSaleDealerController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	FormSaleDealerBusiness formSaleDealerBusiness;

	@Autowired
	ReportEngineBusiness reportEngineBusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_SALE_DEALER)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_SALE_DEALER + "')")
	public String FormSaleDealer()
	{
		return "epos/sales/FormSaleDealer";
	}

	// Lay danh sach loai GD
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_AP_DOMAINS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListApDomains(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getListApDomains() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_AP_DOMAINS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", keySearch.getCode());

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				List<ApDomainModel> listTemp = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
				});
				if (keySearch != null && keySearch.getFormName() != null && listTemp != null && listTemp.size() > 0)
				{
					if ("FormSaleDealer".equals(keySearch.getFormName()))
					{
						String code = keySearch.getName();
						for (int i = 0; i < listTemp.size(); i++)
						{
							if (code.contains(listTemp.get(i).getCode()))
							{
								list.add(listTemp.get(i));
							}
						}
					}
				} else
				{
					list = listTemp;
				}
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}

	// Lay danh sach dai ly
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_AGENTS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListAgents(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getListAgents() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_AGENTS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", keySearch.getCode());

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StocksList>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StocksList>>(list, HttpStatus.OK);
	}

	// Lay ty gia
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_RATE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getRate(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getRate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String rate = "";
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_RATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(keySearch));

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				rate = re.getCode();
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(rate, HttpStatus.OK);
	}

	// Lay danh sach mat hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCurrentGoodsShop(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getCurrentGoodsShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodsList> list = new ArrayList<GoodsList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_GOODS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", keySearch.getCode());

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodsList>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodsList>>(list, HttpStatus.OK);
	}

	// Lay danh sach don gia
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_PRICES, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getGoodsPriceForDealer(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getGoodsPriceForDealer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<PriceModel> list = new ArrayList<PriceModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_PRICES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(keySearch));

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<PriceModel>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<PriceModel>>(list, HttpStatus.OK);
	}

	// Lay danh sach khuyen mai
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_PROMOTIONS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListPromotions(HttpServletRequest request)
	{
		String nomeMetodo = ".getListPromotions() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<PromotionModel> list = new ArrayList<PromotionModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_PROMOTIONS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<PromotionModel>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<PromotionModel>>(list, HttpStatus.OK);
	}

	// Lay danh sach map price type và bundle
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_INIT_MAP_PRICE_AND_BUNDLE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> initMapPriceTypeAndBundle(HttpServletRequest request)
	{
		String nomeMetodo = ".initMapPriceTypeAndBundle() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<KeyValueObj> list = new ArrayList<KeyValueObj>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_INIT_MAP_PRICE_AND_BUNDLE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<KeyValueObj>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<KeyValueObj>>(list, HttpStatus.OK);
	}

	// Button them vao danh sach
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_ADD_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addGoods(HttpServletRequest request, @RequestBody FSDGoods goodsSelected)
	{
		String nomeMetodo = ".addGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<FSDGoods> lst = new ArrayList<>();
		try
		{
			FSDGoods fsdGoods = formSaleDealerBusiness.addGoods(request, goodsSelected);
			lst.add(fsdGoods);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<FSDGoods>>(lst, HttpStatus.OK);
	}

	// KHoi tao du lieu cho dialog serial
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_INIT_AS_DATA, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> initASData(HttpServletRequest request, @RequestBody ObjectForDoSomething input)
	{
		String nomeMetodo = ".initASData() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputSerialModel> list = new ArrayList<>();
		try
		{
			list = formSaleDealerBusiness.initASData(request, input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InputSerialModel>>(list, HttpStatus.OK);
	}

	// Button xoa danh sach
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_DELETE_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteGoods(HttpServletRequest request, @RequestBody FSDGoods input)
	{
		String nomeMetodo = ".deleteGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<FSDGoods> lst = new ArrayList<>();
		try
		{
			FSDGoods fsdGoods = formSaleDealerBusiness.deleteGoods(input);
			lst.add(fsdGoods);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<FSDGoods>>(lst, HttpStatus.OK);
	}

	// Button ghi thong tin giao dich
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_WRITE_INFO, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> writeInfo(HttpServletRequest request, @RequestBody FSDGoods input)
	{
		String nomeMetodo = ".writeInfo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String mstrAccountType = "";

		try
		{
			mstrAccountType = formSaleDealerBusiness.writeInfo(request, input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(new Gson().toJson(mstrAccountType), HttpStatus.OK);
	}

	// Button ghi thong tin giao dich
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_SAVE_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> saveTransaction(HttpServletRequest request, @RequestBody FSDGoods input)
	{
		String nomeMetodo = ".saveTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String strTransId = "";

		try
		{
			strTransId = formSaleDealerBusiness.saveTransaction(request, input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(new Gson().toJson(strTransId), HttpStatus.OK);
	}

	// Lấy mã đơn hàng
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_SO_CODE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSOCode(HttpServletRequest request, @RequestBody KeyValueObj agent)
	{
		String nomeMetodo = ".getSOCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String code = "";
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_SO_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", agent.getCode());

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				code = re.getCode();
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(new Gson().toJson(code), HttpStatus.OK);
	}

	// Lấy list serial cho mat hang di kem
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_LIST_SERIAL_FOR_ATTACH_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListSerialAttachGoods(HttpServletRequest request, @RequestBody ObjectForDoSomething input)
	{
		String nomeMetodo = ".getListSerialAttachGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputSerialModel> list = new ArrayList<>();
		try
		{
			list = formSaleDealerBusiness.getListSerialAttachGoods(request, input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InputSerialModel>>(list, HttpStatus.OK);
	}

	// Them mat hang di kem vao form
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_ADD_ATTACH_GOODS_TO_FORM, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addAttachGoodsToForm(HttpServletRequest request, @RequestBody FSDGoods input) throws InterruptedException
	{
		String nomeMetodo = ".addAttachGoodsToForm() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<FSDGoods> lst = new ArrayList<>();
		try
		{
			FSDGoods fsdGoods = formSaleDealerBusiness.addAttachGoodsToForm(request, input);
			lst.add(fsdGoods);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		Thread.sleep(1000);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<FSDGoods>>(lst, HttpStatus.OK);
	}

	// Lay tham so de in
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_PARAMS_PRINT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getParamsPrint(HttpServletRequest request, @RequestBody KeyValueObj keySearch)
	{
		String nomeMetodo = ".getParamsPrint() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ParamsSaleDealerObj> list = new ArrayList<ParamsSaleDealerObj>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_PARAMS_PRINT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", keySearch.getCode());

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ParamsSaleDealerObj>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ParamsSaleDealerObj>>(list, HttpStatus.OK);
	}

	// In
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_SALE_DEALER_EXPORT_FILE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> exportFile(HttpServletRequest request, @RequestBody ReportInput input)
	{
		String nomeMetodo = ".exportFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try
		{
			response = reportEngineBusiness.exportFileFromDatasource(request, input, Constants.REQUEST_MAPPING.FORM_SALE_DEALER_EXPORT_FILE);
		} catch (Exception e)
		{
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

}
