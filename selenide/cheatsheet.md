=Navigating=
    baseUrl = "http://site.com";
    open("/login");
    
    open("http://google.com");
    switchTo().frame($("#myFrame").toWebElement());
    
    =Alert=
    switchTo().alert().accept();

=WebDriver=
   getWebDriver().findElement(By.id("username"));     // import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
   WebDriverRunner.setWebDriver(myWebDriver);
   
=Cookies=
   WebDriverRunner.getWebDriver().manage().getCookies();
   Cookie cookie = new Cookie("cookiename", "cookievalue");
   WebDriverRunner.getWebDriver().manage().addCookies(cookie);

=Page and Browser=
    startMaximized = true;
    holdBrowserOpen = true;
    getWebDriver().manage().window().maximize();
    getWebDriver().manage().window().setSize(new Dimension(0,0));   // to minimize
    sleep(5000);
    refresh();
    url();
    source();
    getWebDriver().getTitle();
    confirm();
    confirm("expectedDialogText");
    dismiss();
    writeToFile("content", targetFile);
    takeScreenShot("fileName");
    clearBrowserCache();
    addListener(listener);

    ie();   //is selenide configured to use IE
    phantomjs();
    htmlUnit();


=Find element(s)=
$ for element
$$ for elements

  --> Css 
    $("#element");
    $$("#elements");

  ---> By
    $(By.id(""));
    $(By.cssSelector(""));
    $(By.xpath(""));    
    $(By.className(""));
    $(By.name(""))
    $(By.tagName(""));
    $(By.linkText(""));
    $(By.partialLinkText(""));
    
    
    $(byText("Logout"));        // search by exact text
    $(withText("Logout"));      // search by text (substring)
    $(byTitle("Logout"));       // search by "title" attribute
    $(byAttribute("class", "g"));   // search by attribute
    $(byValue("example"));      // search by "value" attribute

    
=Clicking links and buttons=
    $("#submit").click();
    $("#agreement").submit();
    $(".g").doubleClick();
    $(".g").contextClick();    // context menu
    $("q").pressEnter();
    $("q").pressTab();
    $("#lst-ib").sendKeys(Keys.chord(Keys.CONTROL, "a"));   // select all
    actions().click($("#rememberMe")).build().perform();
    actions().click($("#lst-ib").val("selenide")).build().perform();
    
    executeJavaScript("console.log('Hello')");


=Interacting with forms=
    $("#login").setValue("John Doe");
    $("#login").val("John Doe");
    $(".menu").selectOption(String text);
    $(By.name("menu")).selectOptionByValue(String value);
    $(By.name("menu")).getSelectedOption();
    $(By.name("menu")).getSelectedText();
    $(By.name("menu")).getSelectedValue();
    selectRadio(By.name("user.gender"), "male");
    $("#element")).hover();
    
    Upload/Download files
    $("#upload").uploadFromClasspath("c:/files/my-file.txt");
    $("#upload").uploadFile("c:/files/my-file.txt");
    File file = $("#download_button").download();
    $("#cv").uploadFile(
        new File("cv1.doc"),
        new File("cv2.doc"),
        new File("cv3.doc"),
        new File("cv4.doc"));



=Scoping=
    $("#mainElement").$("#subElement");
    $("#customerContainer").find(".user_name");
    $$("li").get(5); 
    $("li", 5);  // looking for Nth element 

    

=Assertions=
    $("#element").shouldHave(text("abc"));
    $("h1").shouldHave(exactText("Hello"))
    $("h1").shouldHave(textCaseSensitive("Hello\s*John"));
    $("h1").shouldHave(exactTextCaseSensitive("Hello"));
    $("#input").shouldHave(exactValue("John"));
    Html.text.containsCaseSensitive(source(), "Text pattern From Page Source");
    
    $("h1").shouldHave(css("font-size", "16px"));
    $$("#mytable tbody tr").shouldHave(size(2));
    $("#input").shouldHave(name("fname"));
    $("#input").shouldHave(value("John"));
    $("#input").shouldHave(type("checkbox"));
    $("#input").shouldHave(id("myForm"));
    $("#input").shouldNotHave(text("Hello"), text("World"));
   
    $$(".errors").shouldHave(size(2));
    $$(".errors").shouldHave(exactTexts("text 1", "text 2"));
    $$(".errors").shouldHave(texts("text 1", "text 2"));
    
    $("input").shouldBe(visible, enabled);     //visible | appear
    $("input").shouldBe(exist);                //present | exist  
    $("input").shouldBe(hidden);               //hidden | disappear | not(visible) 
    $("input").shouldBe(readonly); 
    $("input").shouldBe(focused);
    $(".errors").shouldBe(empty);
    $$(".errors").shouldBe(empty);
    $("input").shouldNotBe(visible, enabled);
    $("#element").should(exist);

=Querying=
    $("#element").isDisplayed();
    $("#element").exists(); 

    $$("#multirowTable tr").findBy(text("Norris"));
    $$("#multirowTable tr").filterBy(text("Norris"));
    $$("#multirowTable tr").excludeWith(text("Chack"));    
    
    $$(“#employees tbody tr”)
    .filter(visible)
    .shouldHave(size(4));

=Search for parents/children=
    $(“td”).parent()
    $(“td”).closest(“tr”)
    $(“.btn”).closest(“.modal”)
    $(“div”).find(By.name(“q”))


==Wait==    

with text/value/attribute
    $("#welcome").waitUntil(hasText("Hello, Johny!"), 2000);
    $("#username").waitUntil(hasAttribute("name", "user.name"), 2000);
    $("#username").waitUntil(hasClass("green-button"), 2000);
    $("#username").waitUntil(hasValue("123"), 2000);
    $("#username").waitUntil(matchesText("Johny"), 2000);
    $("#username").waitUntil(not(matchesText("Noname")), 2000);
    $("#username").waitUntil(matchText("^Johny$"), 2000);
    
with Conditions
    $("#username").waitUntil(present, 5000);
    $("#username").waitUntil(enabled, 5000);
    $("#username").waitUntil(disabled, 5000);
    $("#username").waitUntil(visible, 5000);
    $("#username").waitUntil(appears, 5000);
    $("#username").waitUntil(disappears, 5000);
    
    
==Command Line==
    $ mvn test -Dbrowser=chrome
