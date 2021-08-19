function sleep(msec: number) {
    return new Promise(() => {
       setTimeout(() => {}, msec);
    })
}

async function main() {
    const url = window.location.href;
    console.log("auto login check!", url);

    // 自動ログアウトした場合か、そこからログインしてセッションエラーになった場合
    if (url.startsWith("https://opthd.my.salesforce.com/?ec=") || url.endsWith("SamlError")) {
        window.location.href = "https://opthd.my.salesforce.com/";

        await sleep(100);
        const targetButton = "div#idp_hint :first-child";
        const button = document.querySelector<HTMLElement>(targetButton);
        if(button) {
            button.click();
        }
    }
}

main()
