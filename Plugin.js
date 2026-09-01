// @name        Test GitHub Plugin
// @version     1.0.1
// @description Тестовый скрипт для проверки автообновлений и обработки команд
// @changelog   Добавлена обработка команды .log; Добавлен вывод статуса с GitHub

(function() {
    function cont() {
        try { return wg.HookResult.continue(); } catch (e) { return undefined; }
    }

    function handleCommand(msg) {
        var text = "";
        if (typeof msg === "string") text = msg;
        else if (msg && typeof msg === "object") text = msg.text || msg.message || msg.body || "";

        if (!text) return cont();

        var cleanText = String(text).trim().toLowerCase();

        // Проверка команды .log (или .logс)
        if (cleanText === ".log" || cleanText === ".logc" || cleanText === ".лог") {
            try {
                // Выводим всплывающее уведомление (toast)
                wg.toast("successfully гитхаб");
            } catch (e) {
                try {
                    wg.alert("successfully гитхаб");
                } catch (e2) {}
            }

            // Очищаем поле ввода
            try { wg.setInputText(""); } catch (e) {}

            // Отменяем отправку сообщения в чат
            try { return wg.HookResult.cancel(); } catch (e) { return cont(); }
        }

        return cont();
    }

    // Регистрация перехватчиков отправителя
    ["onSendMessage", "onOutgoingMessage", "onMessageSend"].forEach(function(h) {
        try {
            wg.on(h, function(msg) {
                return handleCommand(msg);
            });
        } catch (e) {}
    });

    try { wg.log("[GitHub Script] Тестовый скрипт успешно загружен и активен!"); } catch (e) {}
})();
