function main() {
    const url = window.location.href;
    const param = window.location.search;
    console.log("auto login check!", url);

    // 自動ログアウトした場合か、そこからログインしてセッションエラーになった場合
    if (param.startsWith("?ec=") || url.endsWith("SamlError")) {
        // https://xxxxx.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fopthd（以下略）
        // https://xxxxx.my.salesforce.com/_nc_external/identity/saml/SamlError
        window.location.href = url.replace(/(\?.*)|(\_nc_external\/.*)/, "") + "?automate-salesforce-onelogin";
        return;
    }

    // リダイレクトしてきた場合
    if (url.endsWith("?automate-salesforce-onelogin")) {
        const targetButton = "div#idp_hint :first-child";
        let retryCount = 0;
        while(retryCount++ < 5) {
            const button = document.querySelector<HTMLElement>(targetButton);
            if(button) {
                button.click();
                break;
            }
        }
        return;
    }
}

main()
