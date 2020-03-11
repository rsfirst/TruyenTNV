package vn.com.fis.model.css;

import java.sql.SQLData;
import java.sql.SQLException;
import java.sql.SQLInput;
import java.sql.SQLOutput;

// TODO: Auto-generated Javadoc
/**
 * The Class RegisterOUTObject.
 */
public class RegisterOUTObject implements SQLData
{

	/** The sql type. */
	private String sql_type = "EPOS2.REG_OUT_OBJ";

	/** The action audit id. */
	protected String actionAuditId;

	/** The in status. */
	protected String inStatus;

	/** The hlr status. */
	protected String hlrStatus;

	/** The auc status. */
	protected String aucStatus;

	/** The eki. */
	protected String eki;

	/** The a 3 a 8. */
	protected String a3a8;

	/** The kind. */
	protected String kind;

	/** The charge id. */
	protected String chargeId;

	/** The expire date. */
	protected String expireDate;

	/** The profile id. */
	protected String profileId;

	/** The str alco. */
	protected String strAlco;

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#getSQLTypeName()
	 */
	public String getSQLTypeName() throws SQLException
	{
		return this.sql_type;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#readSQL(java.sql.SQLInput, java.lang.String)
	 */
	public void readSQL(SQLInput stream, String typeName) throws SQLException
	{
		this.sql_type = typeName;

		this.actionAuditId = stream.readString();
		this.inStatus = stream.readString();
		this.hlrStatus = stream.readString();
		this.aucStatus = stream.readString();
		this.eki = stream.readString();
		this.a3a8 = stream.readString();
		this.kind = stream.readString();
		this.chargeId = stream.readString();
		this.expireDate = stream.readString();
		this.profileId = stream.readString();

		this.strAlco = stream.readString(); // alco
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#writeSQL(java.sql.SQLOutput)
	 */
	public void writeSQL(SQLOutput stream) throws SQLException
	{
		stream.writeString(this.actionAuditId);
		stream.writeString(this.inStatus);
		stream.writeString(this.hlrStatus);
		stream.writeString(this.aucStatus);
		stream.writeString(this.eki);
		stream.writeString(this.a3a8);
		stream.writeString(this.kind);
		stream.writeString(this.chargeId);
		stream.writeString(this.expireDate);
		stream.writeString(this.profileId);
		stream.writeString(this.strAlco);
	}

	/**
	 * Sets the alco.
	 *
	 * @param alco
	 *            the new alco
	 */
	public void setAlco(String alco)
	{
		this.strAlco = alco;
	}

	/**
	 * Gets the alco.
	 *
	 * @return the alco
	 */
	public String getAlco()
	{
		return strAlco;
	}

	/**
	 * Sets the action audit id.
	 *
	 * @param actionAuditId
	 *            the new action audit id
	 */
	public void setActionAuditId(String actionAuditId)
	{
		this.actionAuditId = actionAuditId;
	}

	/**
	 * Gets the action audit id.
	 *
	 * @return the action audit id
	 */
	public String getActionAuditId()
	{
		return actionAuditId;
	}

	/**
	 * Sets the in status.
	 *
	 * @param inStatus
	 *            the new in status
	 */
	public void setInStatus(String inStatus)
	{
		this.inStatus = inStatus;
	}

	/**
	 * Gets the in status.
	 *
	 * @return the in status
	 */
	public String getInStatus()
	{
		return inStatus;
	}

	/**
	 * Sets the hlr status.
	 *
	 * @param hlrStatus
	 *            the new hlr status
	 */
	public void setHlrStatus(String hlrStatus)
	{
		this.hlrStatus = hlrStatus;
	}

	/**
	 * Gets the hlr status.
	 *
	 * @return the hlr status
	 */
	public String getHlrStatus()
	{
		return hlrStatus;
	}

	/**
	 * Sets the auc status.
	 *
	 * @param aucStatus
	 *            the new auc status
	 */
	public void setAucStatus(String aucStatus)
	{
		this.aucStatus = aucStatus;
	}

	/**
	 * Gets the auc status.
	 *
	 * @return the auc status
	 */
	public String getAucStatus()
	{
		return aucStatus;
	}

	/**
	 * Sets the eki.
	 *
	 * @param eki
	 *            the new eki
	 */
	public void setEki(String eki)
	{
		this.eki = eki;
	}

	/**
	 * Gets the eki.
	 *
	 * @return the eki
	 */
	public String getEki()
	{
		return eki;
	}

	/**
	 * Sets the a 3 a 8.
	 *
	 * @param a3a8
	 *            the new a 3 a 8
	 */
	public void setA3a8(String a3a8)
	{
		this.a3a8 = a3a8;
	}

	/**
	 * Gets the a 3 a 8.
	 *
	 * @return the a 3 a 8
	 */
	public String getA3a8()
	{
		return a3a8;
	}

	/**
	 * Sets the kind.
	 *
	 * @param kind
	 *            the new kind
	 */
	public void setKind(String kind)
	{
		this.kind = kind;
	}

	/**
	 * Gets the kind.
	 *
	 * @return the kind
	 */
	public String getKind()
	{
		return kind;
	}

	/**
	 * Sets the charge id.
	 *
	 * @param chargeId
	 *            the new charge id
	 */
	public void setChargeId(String chargeId)
	{
		this.chargeId = chargeId;
	}

	/**
	 * Gets the charge id.
	 *
	 * @return the charge id
	 */
	public String getChargeId()
	{
		return chargeId;
	}

	/**
	 * Sets the expire date.
	 *
	 * @param expireDate
	 *            the new expire date
	 */
	public void setExpireDate(String expireDate)
	{
		this.expireDate = expireDate;
	}

	/**
	 * Gets the expire date.
	 *
	 * @return the expire date
	 */
	public String getExpireDate()
	{
		return expireDate;
	}

	/**
	 * Sets the profile id.
	 *
	 * @param value
	 *            the new profile id
	 */
	public void setProfileId(String value)
	{
		this.profileId = value;
	}

	/**
	 * Gets the profile id.
	 *
	 * @return the profile id
	 */
	public String getProfileId()
	{
		return profileId;
	}
}
