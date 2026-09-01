// @name        Test GitHub Plugin
// @version     1.0.2
// @description изменение #1
// @changelog   Добавлена обработка команды .log; Добавлен вывод статуса с GitHub

wg.on("onSendMessage", function(msg) {
    // Проверяем, есть ли вообще текст в сообщении
    if (!msg || !msg.text) {
        return wg.HookResult.continue(); //[span_4](start_span)[span_4](end_span)
    }

    var cleanText = msg.text.trim().toLowerCase();

    // Проверка команд
    if (cleanText === ".log" || cleanText === ".logc" || cleanText === ".лог") {
        
        // Показываем уведомление
        wg.toast("successfully привет"); //[span_5](start_span)[span_5](end_span)
        
        // Очищаем поле ввода 
        try { wg.setInputText(""); } catch (e) {} //[span_6](start_span)[span_6](end_span)

        // Отменяем реальную отправку сообщения в чат
        return wg.HookResult.cancel("blocked by plugin"); //[span_7](start_span)[span_7](end_span)
    }

    // Если команда не наша, позволяем сообщению отправиться как обычно
    return wg.HookResult.continue(); //[span_8](start_span)[span_8](end_span)
});

wg.log("[GitHub Script] Тестовый скрипт v1.0.2 успешно загружен и активен!"); //[span_9](start_span)[span_9](end_span)
