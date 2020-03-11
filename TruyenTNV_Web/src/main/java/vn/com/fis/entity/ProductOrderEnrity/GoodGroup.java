package vn.com.fis.entity.ProductOrderEnrity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class GoodGroup
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "good_group_seq")
	@SequenceGenerator(sequenceName = "good_group_seq", initialValue = 1, allocationSize = 1, name = "good_group_seq")
	long Id;
	
	long epos_groupId;
	String goodType;
	
	int status;

	public long getId()
	{
		return Id;
	}

	public void setId(long id)
	{
		Id = id;
	}

	public long getEpos_groupId()
	{
		return epos_groupId;
	}

	public void setEpos_groupId(long epos_groupId)
	{
		this.epos_groupId = epos_groupId;
	}

	public String getGoodType()
	{
		return goodType;
	}

	public void setGoodType(String goodType)
	{
		this.goodType = goodType;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}
}
