package vn.com.fis.business.css;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.CallCrmApplication;
import vn.com.fis.ftu.vnm.wrapper.StringUtilEx;
import vn.com.fis.ftu.vnm.wrapper.entity.ChangeBillingProfileInput;
import vn.com.fis.ftu.vnm.wrapper.entity.ChangeBillingProfileOutput;
import vn.com.fis.ftu.vnm.wrapper.entity.Create_CustomerInput;
import vn.com.fis.ftu.vnm.wrapper.entity.Create_CustomerOutput;
import vn.com.fis.model.css.ApDomainModel;
import vn.com.fis.model.css.DistrictObject;
import vn.com.fis.model.css.GLCodeObject;
import vn.com.fis.model.css.InputPostpaid;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.PersonTypeObject;
import vn.com.fis.model.css.PostpaidPersonObject;
import vn.com.fis.model.css.ProvinceObject;
import vn.com.fis.model.css.ServiceTypeObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Service
public class PostpaidBusiness {

	private static final Logger LOG = LoggerFactory.getLogger(PostpaidBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public List<GLCodeObject> getListGLCode(HttpServletRequest request, String codeName) throws Exception {
		String nomeMetodo = ".getListGLCode()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GLCodeObject> glList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("codeName", codeName);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_GL_CODE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					glList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GLCodeObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return glList;
	}

	public List<ApDomainModel> getPostpaidTypeCustomer(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getPostpaidTypeCustomer()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> custTypeList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_TYPE_CUST;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					custTypeList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return custTypeList;
	}

	public List<ServiceTypeObject> getPostpaidServiceType(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getPostpaidServiceType()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ServiceTypeObject> serviceTypeList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_SERVICE_TYPE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					serviceTypeList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<ServiceTypeObject>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return serviceTypeList;
	}

	public List<PersonTypeObject> getPostpaidPersonType(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getPostpaidServiceType()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<PersonTypeObject> personTypeList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_PERSON_TYPE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					personTypeList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PersonTypeObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return personTypeList;
	}

	public List<ApDomainModel> getPostpaidCustomerSeg(HttpServletRequest request, String customerSegCode)
			throws Exception {
		String nomeMetodo = ".getPostpaidCustomerSeg() - CODE =" + customerSegCode;
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> custSeqList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("customerSegCode", customerSegCode);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_CUST_SEG;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					custSeqList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return custSeqList;
	}

	public List<ProvinceObject> getProvince(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getProvince()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ProvinceObject> provinceList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_PROVINCE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					provinceList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProvinceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return provinceList;
	}

	public List<DistrictObject> getDistrict(HttpServletRequest request, String provinceId) throws Exception {
		String nomeMetodo = ".getDistrict()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<DistrictObject> districtList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("provinceId", provinceId);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_DISTRICT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					districtList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<DistrictObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return districtList;
	}

	public List<PostpaidPersonObject> getPersonPostpaidParent(HttpServletRequest request, String companyName,
			String genderCode, String personType, String idNum, String birthDate, String taxCode) throws Exception {
		String nomeMetodo = ".getPersonPostpaidParent()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<PostpaidPersonObject> resultListPerson = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("companyName", companyName);
			params.put("genderCode", genderCode);
			params.put("personType", personType);
			params.put("idNum", idNum);
			params.put("birthDate", birthDate);
			params.put("taxCode", taxCode);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_SEARCH_PERSON_PARENT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultListPerson = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<PostpaidPersonObject>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultListPerson;
	}

	public List<PostpaidPersonObject> searchPersonByTaxCodeOrIDNum(HttpServletRequest request, String valueSearch,
			boolean isIdNum) throws Exception {
		String nomeMetodo = ".searchPersonByTaxCodeOrIDNum()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<PostpaidPersonObject> resultListPerson = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("valueSearch", valueSearch);
			params.put("isIdNum", String.valueOf(isIdNum));
			String url = ev.getProperty("login.url") + Constants.POSTPAID_SEARCH_PERSON_PARENT_BY_IDNUM_OR_TAXCODE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultListPerson = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<PostpaidPersonObject>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultListPerson;
	}

	public PostpaidPersonObject addNewPersonPostpaidParent(HttpServletRequest request,
			@RequestBody List<PostpaidPersonObject> lstPerson, String staffId, String shopId) throws Exception {
		String nomeMetodo = ".addNewPersonPostpaidParent()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		InputPostpaid inputPostpaid = new InputPostpaid();
		try {
			inputPostpaid.setLstPerson(lstPerson);
			inputPostpaid.setStaffId(staffId);
			inputPostpaid.setShopId(shopId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPostpaid);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_ADD_NEW_PERSON_PARENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultPerson;
	}

	public PostpaidPersonObject updatePersonPostpaidParent(HttpServletRequest request,
			List<PostpaidPersonObject> lstPerson, String staffId, String shopId) throws Exception {
		String nomeMetodo = ".updatePersonPostpaidParent()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		try {
			InputPostpaid inputPostpaid = new InputPostpaid();
			inputPostpaid.setLstPerson(lstPerson);
			inputPostpaid.setStaffId(staffId);
			inputPostpaid.setShopId(shopId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPostpaid);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_UPDATE_PERSON_PARENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultPerson;
	}

	public PostpaidPersonObject addNewPersonPostpaidChild(HttpServletRequest request,
			List<PostpaidPersonObject> lstPerson, String staffId, String shopId) throws Exception {
		String nomeMetodo = ".addNewPersonPostpaidChild()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		InputPostpaid inputPostpaid=new InputPostpaid();
		try {
			inputPostpaid.setLstPerson(lstPerson);
			inputPostpaid.setStaffId(staffId);
			inputPostpaid.setShopId(shopId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPostpaid);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_ADD_NEW_PERSON_CHILD;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultPerson;
	}

	public PostpaidPersonObject updatePersonPostpaidChild(HttpServletRequest request,
			List<PostpaidPersonObject> lstPerson, String staffId, String shopId) throws Exception {
		String nomeMetodo = ".updatePersonPostpaidChild()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		InputPostpaid inputPostpaid=new InputPostpaid();
		try {
			inputPostpaid.setLstPerson(lstPerson);
			inputPostpaid.setStaffId(staffId);
			inputPostpaid.setShopId(shopId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPostpaid);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_UPDATE_PERSON_CHILD;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultPerson;
	}

	public PostpaidPersonObject createCustomerTibco(PostpaidPersonObject per) throws Exception {
		String nomeMetodo = ".createCustomerTibco()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			String path = ev.getProperty("path.config.server");
			CallCrmApplication callTibco = new CallCrmApplication(path);

			Create_CustomerInput input = new Create_CustomerInput();
			Create_CustomerOutput output = new Create_CustomerOutput();

			String genderCode = per.getGenderCode();
			String title = ("1".equals(genderCode)) ? "Ms" : "Mr";
			String gender = ("1".equals(genderCode)) ? "Female" : "Male";
			// long personTypeId = per.getPersonTypeId();
			String customerType = (String) per.getPersonTypeName(); // Person_type_name_en
																	// =
																	// personTypeNameEn
			String fullName = "";

			fullName = per.getFamilyName() + " " + per.getGivenName();

			input.setTitle(title);
			input.setCustomer_Type(customerType);
			input.setCompany_Name(StringUtilEx.nvl(per.getOfficialName(), ""));
			input.setLast_Name(StringUtilEx.nvl(per.getFamilyName(), ""));
			input.setFirst_Name(StringUtilEx.nvl(per.getGivenName(), ""));
			input.setGender(gender);
			input.setDOB(StringUtilEx.nvl(per.getBirthDate(), ""));

			input.setCityofBirth(StringUtilEx.nvl(per.getPlaceOfIssue(), ""));

			input.setID_Number(StringUtilEx.nvl(per.getSocialSecurityNumber(), ""));
			input.setID_Type("ID Card (Vietnam)");
			input.setPlace_of_Issue(StringUtilEx.nvl(per.getPlaceOfIssue(), ""));
			input.setDate_Of_Issue(StringUtilEx.nvl(per.getDateOfIssue(), ""));
			input.setHouse_Hold_Id("");
			input.setHome_Phone_Number(StringUtilEx.nvl(per.getMobilePhoneNr(), ""));
			input.setEmail_Id(StringUtilEx.nvl(per.getEmailAddress(), ""));
			input.setPhone_Number(StringUtilEx.nvl(per.getMobilePhoneNr(), ""));
			input.setTax_Code(StringUtilEx.nvl(per.getTaxCode(), ""));
			input.setBusiness_License(StringUtilEx.nvl(per.getBussinessLicense(), ""));
			input.setLanguage(StringUtilEx.nvl(per.getSpokenLanguageCode(), ""));
			input.setBilling_Address(StringUtilEx.nvl(per.getPostalGeneral1(), ""));
			input.setBilling_Address("Invoice");
			input.setMobile_Phone_Number(StringUtilEx.nvl(per.getMobilePhoneNr(), ""));
			input.setSpoken_Language(StringUtilEx.nvl(per.getSpokenLanguageCode(), ""));

			com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Invoice_Address invoiceAddress = new com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Invoice_Address();

			String addressLine1 = StringUtilEx.nvl(per.getHomeSuburb(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeLine2(), "") + ",";

			addressLine1 += StringUtilEx.nvl(per.getHomeLine1(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeGeneral3(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeGeneral4(), "");

			invoiceAddress.setAddress_Line1(addressLine1);
			invoiceAddress.setCountry("VietNam");
			invoiceAddress.setDistrict(StringUtilEx.nvl(per.getHomeCity(), "")); // HOME_CITY_NAME
			invoiceAddress.setProvince(StringUtilEx.nvl(per.getHomeState(), "")); // HOME_STATE_NAME
			invoiceAddress.setRegion(StringUtilEx.nvl(per.getHomeGeneral1(), ""));
			input.setInvoice_Address(invoiceAddress);

			com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Polstal_Address_to_SV polstal_Address_to_SV = new com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Polstal_Address_to_SV();

			addressLine1 = "";
			addressLine1 = StringUtilEx.nvl(per.getPostalSuburb(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalLine2(), "") + ",";

			addressLine1 += StringUtilEx.nvl(per.getPostalLine1(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalGeneral3(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalGeneral4(), "");

			polstal_Address_to_SV.setAddress_Line1(addressLine1);
			polstal_Address_to_SV.setCountry("VietNam");
			polstal_Address_to_SV.setDistrict(StringUtilEx.nvl(per.getPostalCity(), "")); // POSTAL_HOME_CITY_NAME
			polstal_Address_to_SV.setProvince(StringUtilEx.nvl(per.getPostalState(), "")); // POSTAL_HOME_STATE_NAME
			polstal_Address_to_SV.setRegion(StringUtilEx.nvl(per.getPostalGeneral1(), ""));

			input.setPolstal_Address_to_SV(polstal_Address_to_SV);

			com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Transaction_Reference_Info transaction_Reference_Info = new com.tibco.www.schemas.OCT14_SIT.Shared_Resources.Schema.XML.xsd.EPOS.Schema1_xsd.Transaction_Reference_Info();
			DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			Date date = new Date();

			transaction_Reference_Info.setLocal_Transaction_Date_Timeon_Id(dateFormat.format(date).toString());
			transaction_Reference_Info.setSource("CSS");
			transaction_Reference_Info.setTransacti(String.valueOf(new Date().getTime()));
			input.setTransaction_Reference_Info(transaction_Reference_Info);
			input.setPostAccountStatus("Active");
			input.setPreAccountStatus("Inactive");
			input.setPayment_Method(StringUtilEx.nvl(per.getHttt(), ""));
			input.setBill_Cycle("BR-25");
			input.setBill_Type(StringUtilEx.nvl(per.getPaymentType(), "")); // PAYMENT_LOCATION
			input.setCredit_Limit(StringUtilEx.nvl(per.getCreditLimit(), "")); // CREDIT_LIMIT

			input.setBILL_MEDIA(StringUtilEx.nvl(per.getPaymentLocation(), "")); // PAYMENT_TYPE
			input.setBILL_FORMAT(StringUtilEx.nvl(per.getPaymentLocation(), "")); // PAYMENT_LOCATION
			input.setACCNT_METHD("Balance Forward");

			String customerRef = String.valueOf(new Date().getTime());
			String parentAccountNo = StringUtilEx.nvl(per.getAccountNo(), ""); // ACCOUNT_NUMBER

			if ("3".equalsIgnoreCase(per.getPersonTypeId())) {
				String customerRefNumber = (String) per.getCustomerRefNumber(); // CUSTOMER_REF_NUMBER

				input.setParent_Cust_Ref(customerRefNumber);
				input.setCustomer_Type((String) per.getPersonTypeName()); // CUSTOMER_TYPE
				parentAccountNo = StringUtilEx.nvl(per.getParentAccountNo(), "");
			}
			input.setCustomer_Ref_Number(customerRef);
			input.setCustomer_Segment(StringUtilEx.nvl(per.getCustomerSegment(), "")); // CUSTOMER_SEGMENT

			input.setParent_Account_Number(parentAccountNo);
			input.setPayment_Type(StringUtilEx.nvl(per.getPaymentType(), "")); // PAYMENT_TYPE
			input.setReport_Level("");

			output = callTibco.create_Customer(input);

			String responseCode = StringUtilEx.nvl(output.getResponseCode(), "");

			if ("00000".equals(responseCode)) {
				String accountNumber = StringUtilEx.nvl(output.getAccount_Number(), "");

				per.setAccountNo(accountNumber);
				per.setTkBill(accountNumber);
				per.setFullName(fullName);
				per.setCustType(customerType);
				per.setCustomerRefNumber(customerRef);
				per.setParentAccountNo(parentAccountNo);
				per.setEffectiveEndDate(null);
				per.setLastModify(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
			} else {
				throw new Exception("ERROR: " + responseCode + " - " + output.getResponseDescription());
			}

		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return per;
	}

	public PostpaidPersonObject changeBillingProfile(PostpaidPersonObject per) throws Exception {
		String nomeMetodo = ".changeBillingProfile()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			String path = ev.getProperty("path.config.server");
			CallCrmApplication callTibco = new CallCrmApplication(path);

			String gender = "";
			String title = "";
			if (per.getGenderCode() != null) {
				title = ("1".equals(per.getGenderCode())) ? "Ms" : "Mr";
				gender = ("1".equals(per.getGenderCode())) ? "Female" : "Male";
			}
			String addressLine1 = StringUtilEx.nvl(per.getHomeSuburb(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeLine2(), "") + ",";

			addressLine1 += StringUtilEx.nvl(per.getHomeLine1(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeGeneral3(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getHomeGeneral4(), "");

			ChangeBillingProfileInput input = new ChangeBillingProfileInput();
			com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.BILLINGADDRESS BILLINGADDRESS = new com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.BILLINGADDRESS();

			BILLINGADDRESS.setBillAddress1(addressLine1);
			BILLINGADDRESS.setBillAddress2(addressLine1);
			BILLINGADDRESS.setBillCity(StringUtilEx.nvl(per.getHomeCity(), "")); // HOME_CITY_NAME
			BILLINGADDRESS.setBillCountry("VietNam");
			BILLINGADDRESS.setBillDistrict(StringUtilEx.nvl(per.getHomeState(), "")); // HOME_STATE_NAME
			BILLINGADDRESS.setBillProvince(StringUtilEx.nvl(per.getHomeCity(), "")); // HOME_CITY_NAME
			BILLINGADDRESS.setBillRegion(StringUtilEx.nvl(per.getHomeGeneral1(), ""));
			BILLINGADDRESS.setBillRT(StringUtilEx.nvl(per.getHomeGeneral4(), ""));
			BILLINGADDRESS.setBillRW(StringUtilEx.nvl(per.getHomeGeneral3(), ""));
			BILLINGADDRESS.setBillZipCode(StringUtilEx.nvl(per.getHomeSuburb(), ""));

			input.setBILLINGADDRESS(BILLINGADDRESS);

			com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.BILLINGPROFILE BILLINGPROFILE = new com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.BILLINGPROFILE();

			BILLINGPROFILE.setAccountName("");
			BILLINGPROFILE.setBankAccountNumber("");
			BILLINGPROFILE.setBankCode("");
			BILLINGPROFILE.setBankCode("");
			BILLINGPROFILE.setBillFormat("");
			BILLINGPROFILE.setBillingPreferredLanguage("");
			BILLINGPROFILE.setBillMedia("");
			// BILLINGPROFILE.setBill_Style(StringUtil.nvl(per.getProperty("PAYMENT_LOCATION"),""));
			BILLINGPROFILE.setBill_Cycle("");
			BILLINGPROFILE.setCardExpiryDate("");
			BILLINGPROFILE.setCardHolderName("");
			BILLINGPROFILE.setCardNumber("");
			BILLINGPROFILE.setPayment_Method(StringUtilEx.nvl(per.getHttt(), "")); // HTTT
			BILLINGPROFILE.setBillingPreferredLanguage(StringUtilEx.nvl(per.getSpokenLanguageCode(), ""));
			input.setBILLINGPROFILE(BILLINGPROFILE);

			addressLine1 = "";
			addressLine1 = StringUtilEx.nvl(per.getPostalSuburb(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalLine2(), "") + ",";

			addressLine1 += StringUtilEx.nvl(per.getPostalLine1(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalGeneral3(), "") + ",";
			addressLine1 += StringUtilEx.nvl(per.getPostalGeneral4(), "");

			com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.CUSTOMERPROFILE CUSTOMERPROFILE = new com.tibco.www.schemas.VNM_PROJECT.Shared_Resources.Schema.XML.xsd.EPOS.Schema_xsd27.CUSTOMERPROFILE();

			CUSTOMERPROFILE.setAddress1(addressLine1);
			CUSTOMERPROFILE.setAddress2(addressLine1);
			CUSTOMERPROFILE.setCity(StringUtilEx.nvl(per.getPostalState(), "")); // POSTAL_HOME_CITY_NAME
			CUSTOMERPROFILE.setCityofBirth(StringUtilEx.nvl(per.getPlaceOfIssue(), "")); // setGeneral7
			CUSTOMERPROFILE.setCompanyName(StringUtilEx.nvl(per.getOfficialName(), ""));
			CUSTOMERPROFILE.setCountry("VietNam");
			CUSTOMERPROFILE.setCustomerIdNumber("");
			CUSTOMERPROFILE.setCustomerSegment(StringUtilEx.nvl(per.getCustomerSegment(), "")); // CUSTOMER_SEGMENT
			CUSTOMERPROFILE.setCustomerType((String) per.getCustomerType()); // CUSTOMER_TYPE
			CUSTOMERPROFILE.setDateofBirth(per.getBirthDate());
			CUSTOMERPROFILE.setDateofIssue(StringUtilEx.nvl(per.getDateOfIssue(), ""));
			CUSTOMERPROFILE.setDistrict(StringUtilEx.nvl(per.getPostalCity(), "")); // POSTAL_HOME_STATE_NAME
			CUSTOMERPROFILE.setExpiryDate("");
			CUSTOMERPROFILE.setGender(gender);
			CUSTOMERPROFILE.setIDNumber(StringUtilEx.nvl(per.getSocialSecurityNumber(), ""));
			CUSTOMERPROFILE.setIDType("");
			CUSTOMERPROFILE.setMSISDN(StringUtilEx.nvl(per.getMsisdn(), "")); // MSISDN
			CUSTOMERPROFILE.setHome_Phone_Number(StringUtilEx.nvl(per.getMobilePhoneNr(), ""));
			CUSTOMERPROFILE.setNPWP_Number("");
			CUSTOMERPROFILE.setPaymentLevel("");
			CUSTOMERPROFILE.setPlaceofIssue(StringUtilEx.nvl(per.getPlaceOfIssue(), ""));
			CUSTOMERPROFILE.setProvince(StringUtilEx.nvl(per.getPostalState(), "")); // POSTAL_HOME_CITY_NAME
			CUSTOMERPROFILE.setRegion(StringUtilEx.nvl(per.getPostalGeneral1(), ""));
			CUSTOMERPROFILE.setTaxCode(StringUtilEx.nvl(per.getTaxCode(), "")); // TAX_CODE
			CUSTOMERPROFILE.setTitle(title);
			CUSTOMERPROFILE.setPayment_Type(StringUtilEx.nvl(per.getPaymentType(), "")); // PAYMENT_TYPE
			CUSTOMERPROFILE.setEmail_Id(StringUtilEx.nvl(per.getEmailAddress(), ""));
			CUSTOMERPROFILE.setBusiness_License(StringUtilEx.nvl(per.getBussinessLicense(), ""));
			CUSTOMERPROFILE.setLanguage(StringUtilEx.nvl(per.getSpokenLanguageCode(), ""));
			CUSTOMERPROFILE.setBill_Type(StringUtilEx.nvl(per.getPaymentType(), "")); // PAYMENT_LOCATION
			input.setCUSTOMERPROFILE(CUSTOMERPROFILE);
			input.setLastName(per.getFamilyName());
			input.setFirstName(per.getGivenName());
			input.setLocalTxnDtTime(convertDatetime("dd/MM/yyyy HH:mm:ss"));
			input.setPostAccountIntegrationId(StringUtilEx.nvl(per.getTkBill(), "")); // TK_BILL
			input.setPreAccountIntegrationId("");
			input.setTransactionId(String.valueOf(new Date().getTime()));

			ChangeBillingProfileOutput output = callTibco.changeBillingProfile(input);
			String responseCode = StringUtilEx.nvl(output.getStatus(), "");
			if (!"00000".equals(responseCode)) {
				throw new Exception("ERROR: " + responseCode + " - " + output.getStatus_Text());
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return per;
	}

	public String convertDatetime(String format) {
		DateFormat dateFormat = new SimpleDateFormat(format);
		Date date = new Date();

		return dateFormat.format(date);
	}

	public String convertDatetime(String format, Date date) {
		if (date == null) {
			return null;
		}
		DateFormat dateFormat = new SimpleDateFormat(format);

		return dateFormat.format(date);
	}

	public Map<String, Object> searchPostPaidPeople(HttpServletRequest request, Map<String, String> searchConditions)
			throws Exception {
		String nomeMetodo = ".searchPostPaidPeople()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Map<String, Object> data = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchConditions);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_SEARCH_PARENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				data = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return data;
	}

	public Map<String, Object> getPostPaidPersonObject(HttpServletRequest request, Map<String, String> queryData)
			throws Exception {
		String nomeMetodo = ".getPostPaidPersonObject()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Map<String, Object> data = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(queryData);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_PERSON_DETAIL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				data = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return data;
	}

	public PostpaidPersonObject searchPostpaidPersonByAccountNo(HttpServletRequest request, String accountNo)
			throws Exception {
		String nomeMetodo = ".searchPostpaidPersonByAccountNo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("accountNo", accountNo);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_SEARCH_PERSON_PARENT_BY_ACCOUNT_NO;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return resultPerson;
	}

	public Map<String, Object> searchHistory(HttpServletRequest request, Map<String, String> searchCondition)
			throws Exception {
		String nomeMetodo = ".searchHistory()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Map<String, Object> mapPostpaidHistory = null;
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchCondition);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_SEARCH_HISTORY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mapPostpaidHistory = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return mapPostpaidHistory;
	}

	public List<ApDomainModel> getListResonChangeSimPostpaid(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getListResonChangeSimPostpaid()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> reasonChangeSimList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.POSTPAID_GET_LIST_REASON_CHANGE_SIM_POSTPAID;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					reasonChangeSimList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<ApDomainModel>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return reasonChangeSimList;
	}

	public PostpaidPersonObject actionChangeSimPostpaid(HttpServletRequest request, String newSerial,
			PostpaidPersonObject currCust, String staffId, String shopId, String strComment) throws Exception {
		String nomeMetodo = ".actionChangeSimPostpaid()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		PostpaidPersonObject resultPerson = new PostpaidPersonObject();
		InputPostpaid inputPostpaid=new InputPostpaid();
		try {
			inputPostpaid.setNewSerial(newSerial);
			inputPostpaid.setCurrCust(currCust);
			inputPostpaid.setStaffId(staffId);
			inputPostpaid.setShopId(shopId);
			inputPostpaid.setStrComment(strComment);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPostpaid);
			String url = ev.getProperty("login.url") + Constants.POSTPAID_ACTION_CHANGE_SIM_POSTPAID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultPerson = jsonMapper.readValue(tmp.toString(), new TypeReference<PostpaidPersonObject>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw new Exception(ex.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return currCust;
	}

}
