import { useState } from "react";
import { ConfigProvider, theme, Button, Card } from "antd";
import AppHeader from '../../Components/Header'
import PageContent from '../../Components/PageContent'
import AppFooter from '../../Components/Footer'
function Theme() {
 const { defaultAlgorithm, darkAlgorithm } = theme;
 const [isDarkMode, setIsDarkMode] = useState(false);

 const handleClick = () => {
  setIsDarkMode((previousValue) => !previousValue);
 };

 return (
  <ConfigProvider
   theme={{
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
   }}>
    <Card>
    <Button onClick={handleClick}>
     Change Theme to {isDarkMode ? "Light" : "Dark"}
    </Button>
    <AppHeader/>
    <PageContent />
    <AppFooter />
    </Card>
  </ConfigProvider>
 );
}

export default Theme;