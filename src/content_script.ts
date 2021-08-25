async function main() {
    const url = window.location.href;
    const param = window.location.search;
    console.log("auto login check!", url);

    // 自動ログアウトした場合か、そこからログインしてセッションエラーになった場合
    if (param.startsWith("?ec=") || url.endsWith("SamlError")) {
        window.location.href = "https://opthd.my.salesforce.com/?automate-salesforce-onelogin";
        return;
    }

    // リダイレクトしてきた場合
    if (url.endsWith("?automate-salesforce-onelogin")) {
        const targetButton = "div#idp_hint :first-child";
        const button = document.querySelector<HTMLElement>(targetButton);
        if(button) {
            button.click();
        }
        return;
    }
}

main()
