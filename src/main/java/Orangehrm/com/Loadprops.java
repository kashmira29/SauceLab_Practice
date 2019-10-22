package Orangehrm.com;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Loadprops {
    static Properties props;

    static FileInputStream inputStream;

    public String getProperty(String Key){
        props = new Properties();
        try {
            inputStream = new FileInputStream("src\\test\\Resourses\\TestData\\TestDataConfig.properties");
            props.load(inputStream);
            inputStream.close();}
        catch (java.io.IOException e) {
            e.printStackTrace();
        }

        return props.getProperty(Key);
    }
}
