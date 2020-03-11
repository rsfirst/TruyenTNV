package vn.com.fis.model.epos;

import java.util.List;

public class WarrantyDetail
{
	private String warDetailId;
	private String warActionId;
	private String goodsId;
	private String goodsStatus;
	private String quantityIssue;
	private String quantityEffect;
	private String stateId;
	private String note;
	private String checkWarranty;
	private List<TransactionSerialList> lstTransSerial;
	
	
	/**
	 * @return the lstTransSerial
	 */
	public List<TransactionSerialList> getLstTransSerial()
	{
		return lstTransSerial;
	}

	/**
	 * @param lstTransSerial the lstTransSerial to set
	 */
	public void setLstTransSerial(List<TransactionSerialList> lstTransSerial)
	{
		this.lstTransSerial = lstTransSerial;
	}

	public String getWarDetailId()
	{
		return warDetailId;
	}

	public void setWarDetailId(String warDetailId)
	{
		this.warDetailId = warDetailId;
	}

	public String getWarActionId()
	{
		return warActionId;
	}

	public void setWarActionId(String warActionId)
	{
		this.warActionId = warActionId;
	}

	public String getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}

	public String getGoodsStatus()
	{
		return goodsStatus;
	}

	public void setGoodsStatus(String goodsStatus)
	{
		this.goodsStatus = goodsStatus;
	}

	public String getStateId()
	{
		return stateId;
	}

	public void setStateId(String stateId)
	{
		this.stateId = stateId;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getQuantityIssue()
	{
		return quantityIssue;
	}

	public void setQuantityIssue(String quantityIssue)
	{
		this.quantityIssue = quantityIssue;
	}

	public String getQuantityEffect()
	{
		return quantityEffect;
	}

	public void setQuantityEffect(String quantityEffect)
	{
		this.quantityEffect = quantityEffect;
	}

	public String getCheckWarranty()
	{
		return checkWarranty;
	}

	public void setCheckWarranty(String checkWarranty)
	{
		this.checkWarranty = checkWarranty;
	}
}
