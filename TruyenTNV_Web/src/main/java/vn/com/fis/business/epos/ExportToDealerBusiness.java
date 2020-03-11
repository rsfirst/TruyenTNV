package vn.com.fis.business.epos;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.StockTransactionDetailActionModel;
import vn.com.fis.model.epos.StockTransactionObj;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.CommonErrorcode;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@RestController
public class ExportToDealerBusiness {
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ExportToInferiorBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	private int ACTION_EXPORT_COMMAND = 5;

	@Autowired
	WebService webService;


	public ResponseEntity<?> exportCommand(HttpServletRequest request, @RequestBody StockTransObject input) {
		String nomeMetodo = ".exportCommand) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String result="";
		try {
			
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.EXPORT_COMMAND;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}
	
	
	//check validate
	public String validData(HttpServletRequest request, StockTransObject input) throws Exception
	{
		String nomeMetodo = ".validData()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			List<StockTransactionDetailActionModel> goodTrans = input.getLstGoodsTransactionModel();
			
			int i = findInvalidGoodTransactionIssue(goodTrans);
			if (i >= 0)
			{
				throw new Exception(CommonErrorcode.OUTPUT_FOR_STAFF.QuantityBelow);
			}

			// Kiem tra xem da nhap Serial chua
			else {
				i = findInvalidGoodIssueTransactionSerial(input.getLstGoodsTransactionModel());
				if (i >= 0)
				{
					throw new Exception(CommonErrorcode.OUTPUT_FOR_STAFF.InvalidQuantity);
				}
			}

		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}
	// Check hang hoa khong thoa man
		public int findInvalidGoodTransactionIssue(List<StockTransactionDetailActionModel> goodTrans)
		{
			String nomeMetodo = ".findInvalidGoodTransactionIssue()";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			for (int i = 0; i < goodTrans.size(); i++)
			{
				StockTransactionDetailActionModel member = goodTrans.get(i);
				if (Integer.parseInt(member.getQuantityIssue()) <= 0)
				{
					return i;
				}
			}
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return -1;
		}
		
		
		public int findInvalidGoodIssueTransactionSerial(List<StockTransactionDetailActionModel> pGoodList)
		{
			return findInvalidGoodIssueTransactionSerial(pGoodList, false);
		}

		// Check serial khong thoa man
		public int findInvalidGoodIssueTransactionSerial(List<StockTransactionDetailActionModel> pGoodList, boolean pblnIgnoreISDN)
		{
			String nomeMetodo = ".findInvalidGoodIssueTransactionSerial()";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			for (int i = 0; i < pGoodList.size(); i++)
			{
				StockTransactionDetailActionModel member = pGoodList.get(i);
				if (isCheckSerial(member.getCheckSerial()) && !(pblnIgnoreISDN && member.getType().equals("1")))
				{
					if (!member.getQuantityIssue().equals(calculateSum(member.getLstTransSerial()) + ""))
					{
						return i;
					}
				}
			}
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return -1;
		}
		
		// check serial
		public boolean isCheckSerial(String strCheckSerial)
		{
			if (strCheckSerial == null)
				return false;
			else
				return strCheckSerial.equals("1");
		}
		
		private int calculateSum(List<TransactionSerialList> lstTransactionSerial)
		{
			String nomeMetodo = ".calculateSum()";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			int quantity = -1;
			if (lstTransactionSerial != null && lstTransactionSerial.size() > 0)
			{
				quantity = 0;
				for (int i = 0; i < lstTransactionSerial.size(); i++)
				{
					TransactionSerialList transSerial = lstTransactionSerial.get(i);
					int iQuantity = Integer.parseInt((transSerial.getQuantity() == null || "".equals(transSerial.getQuantity())) ? "0" : transSerial.getQuantity());
					quantity += iQuantity;
				}
				if (quantity == 0)
				{
					quantity = lstTransactionSerial.size();
				}
			}
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return quantity;
		}
		

		public boolean isWarrantyGoods(HttpServletRequest request, StockTransactionObj input) throws Exception
		{

			GoodTransactionsModel vtGoodTransaction = new GoodTransactionsModel();

			for(int i=0;i<input.getLstGoodsTransaction().size();i++)
			{
				vtGoodTransaction = input.getLstGoodsTransaction().get(i);
				if(vtGoodTransaction.getCheckWarranty().equals("1"))
				{
					return true;
				}
			}
			return false;
		}




}
