const puppeteer = require('puppeteer');

(async () => {
  // 启动 Puppeteer 并创建一个新页面
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 导航到目标网站
  await page.goto('https://example.com');

  // 等待并点击特定的按钮（通过选择器）
  await page.waitForSelector('#your-button-selector');
  await page.click('#your-button-selector');

  // 等待导航或其他加载事件
  await page.waitForNavigation();

  // 获取页面内容
  const content = await page.content();

  // 在这里处理页面内容，比如提取数据
  console.log(content);

  // 关闭浏览器
  await browser.close();
})();
