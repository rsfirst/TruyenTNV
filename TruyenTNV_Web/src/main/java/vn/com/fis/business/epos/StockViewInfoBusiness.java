package vn.com.fis.business.epos;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.GoodsSearchObj;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.SessionValue;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;

@RestController
public class StockViewInfoBusiness
{

	private static final Logger LOG = LoggerFactory.getLogger(StockViewInfoBusiness.class);

	// Lay thong tin ham goi API
	public String getFunctionGetGoodsList(GoodsSearchObj input)
	{
		String nomeMetodo = ".getFunctionGetGoodsList()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			if ("all".equals(input.getRadio()))
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_LIST_ALL;
			}
			else if ("exists".equals(input.getRadio()))
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_LIST_FROM_STOCK;
			}
			else
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_LIST_FROM_SHOP_STAFF_STOCK;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}

	// Lay thong tin ham goi API
	public String getFunctionGetGoodsQuantity(GoodsSearchObj input)
	{
		String nomeMetodo = ".getFunctionGetGoodsQuantity()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			if ("xxx".equals(input.getRadio()))
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_QUANTITY_LIST_ALL;
			}
			if ("state".equals(input.getRadio()))
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_QUANTITY_BY_STATE;
			}
			else
			{
				func = Constants.REQUEST_MAPPING.GET_GOODS_QUANTITY;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}

	// Loc danh sach nguon hang
	public List<ApDomainModel> getVctResourceList(List<ApDomainModel> lstTemp, SessionValue input)
	{
		String nomeMetodo = ".getVctResourceList()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> lst = new ArrayList<>();
		try
		{
			if ("0".equals(input.getIsForm()))
			{
				lst = lstTemp;
			}
			else
			{
				for (int i = 0; i < lstTemp.size(); i++)
				{
					ApDomainModel vtTemp = lstTemp.get(i);
					if (input.getSessionShopType().equals("0"))
					{
						if (vtTemp.getCode().equals(input.getSessionResourceCode()))
						{
							lst.add(vtTemp);
						}
					}
					else
					{
						if (input.getSessionResourceCode().equals("AL"))
						{
							if (!vtTemp.getCode().equals("AL"))
							{
								lst.add(vtTemp);
							}
						}
						else
						{
							if (vtTemp.getCode().equals(input.getSessionResourceCode()))
							{
								lst.add(vtTemp);
							}
						}
					}
				}
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lst;
	}

	// Lay danh sach hang hoa theo form
	public List<GoodsList> getExistedGoodsByFormName(List<GoodsList> list, KeyValueObj input)
	{
		String nomeMetodo = ".getExistedGoodsByFormName()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodsList> lstReturn = new ArrayList<>();
		try
		{
			if (input.getFormName() != null && !"".equals(input.getFormName()))
			{
				for (int i = 0; i < list.size(); i++)
				{
					GoodsList goods = list.get(i);
					if ("1".equals(goods.getCheckWarranty()))
					{
						lstReturn.add(goods);
					}
				}
			}
			else
			{
				lstReturn = list;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReturn;
	}

	// Lay danh sach hang hoa theo nguon hang
	public List<GoodsList> getExistedGoodsByResourceCode(List<GoodsList> list, KeyValueObj input)
	{
		String nomeMetodo = ".getVctResourceList()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodsList> lstReturn = new ArrayList<>();
		try
		{
			if (input.getCode() != null && !"".equals(input.getCode()))
			{
				for (int i = 0; i < list.size(); i++)
				{
					GoodsList goods = list.get(i);
					if (goods.getResourceCode().equals(input.getCode()))
					{
						lstReturn.add(goods);
					}
				}
			}
			else
			{
				lstReturn = list;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReturn;
	}

	// Lay thong tin ham goi API
	public String getStockSerialByCondition(TransactionSerialList input)
	{
		String nomeMetodo = ".getStockSerialByCondition()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			if ("single".equals(input.getTypeSerialSearch()))
			{
				func = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_SINGLE;
			}
			else if ("strip".equals(input.getTypeSerialSearch()))
			{
				func = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_STRIP;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}

	// Lay serial trong kho
	public String getSingleSerialInStock(TransactionSerialList input)
	{
		String nomeMetodo = ".getSingleSerialInStock()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			func = Constants.REQUEST_MAPPING.GET_SINGEL_SERIAL_IN_STOCK;
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}
	public String getStockSerialByForm(TransactionSerialList input)
	{

		String nomeMetodo = ".getStockSerialByForm()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try
		{
			if (CommonConstant.NEW_WARRANTY_NO.equals(input.getTypeSerialSearch()))
			{
				func = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_FORM_NEW_WARRANTY_NO;
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	
	}
}
