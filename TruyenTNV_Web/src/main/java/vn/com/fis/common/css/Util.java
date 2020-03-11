package vn.com.fis.common.css;

import java.util.Vector;

/**
 * vn.com.fis.branded_shop.common.Util
 * by sondt18
 * at 08/01/2019 10:18 AM
 */
public class Util {
    public static Vector convertObjectArray2ToVector(Object[][] objectNote) {
        Vector vctReturn = new Vector();
        if (objectNote != null) {
            for (int i = 0; i < objectNote.length; i++) {
                Vector vctRow = new Vector();
                for (int j = 0; j < objectNote[i].length; j++) {
                    vctRow.add(objectNote[i][j]);
                }
                vctReturn.add(vctRow);
            }
        }
        return vctReturn;
    }
}
