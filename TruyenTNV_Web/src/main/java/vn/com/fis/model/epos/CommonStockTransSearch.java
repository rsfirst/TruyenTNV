package vn.com.fis.model.epos;

import vn.com.fis.entity.epos.PeriodEntity;
import vn.com.fis.entity.epos.StockEntity;

public class CommonStockTransSearch
{
	StockTransactionModel pStockTrans;
	StockEntity pStock;
	PeriodEntity pCmdPeriod;
	PeriodEntity pInspectPeriod;
	PeriodEntity pExecPeriod;

	public StockTransactionModel getpStockTrans()
	{
		return pStockTrans;
	}

	public void setpStockTrans(StockTransactionModel pStockTrans)
	{
		this.pStockTrans = pStockTrans;
	}

	public StockEntity getpStock()
	{
		return pStock;
	}

	public void setpStock(StockEntity pStock)
	{
		this.pStock = pStock;
	}

	public PeriodEntity getpCmdPeriod()
	{
		return pCmdPeriod;
	}

	public void setpCmdPeriod(PeriodEntity pCmdPeriod)
	{
		this.pCmdPeriod = pCmdPeriod;
	}

	public PeriodEntity getpInspectPeriod()
	{
		return pInspectPeriod;
	}

	public void setpInspectPeriod(PeriodEntity pInspectPeriod)
	{
		this.pInspectPeriod = pInspectPeriod;
	}

	public PeriodEntity getpExecPeriod()
	{
		return pExecPeriod;
	}

	public void setpExecPeriod(PeriodEntity pExecPeriod)
	{
		this.pExecPeriod = pExecPeriod;
	}
}
