package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import vn.com.fis.business.epos.PanelTransactionGoodsDetailBusiness;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TransactionGoodsDetailObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class PanelTransactionGoodsDetailController
{

	private static final Logger LOG = LoggerFactory.getLogger(PanelTransactionGoodsDetailController.class);

	@Autowired
	WebService webService;

	@Autowired
	PanelTransactionGoodsDetailBusiness panelTransactionGoodsDetailBusiness;

	// Xu ly khi chon Them/Sua
	@RequestMapping(value = Constants.REQUEST_MAPPING.PNL_TRANSACTION_GOODS_DETAIL_ON_ACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onAction(HttpServletRequest request, @RequestBody TransactionGoodsDetailObject input)
	{
		String nomeMetodo = ".onAction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodTransactionsModel> lst = new ArrayList<>();
		try
		{
			lst = panelTransactionGoodsDetailBusiness.onAction(request, input);
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
		return new ResponseEntity<List<GoodTransactionsModel>>(lst, HttpStatus.OK);
	}

}
