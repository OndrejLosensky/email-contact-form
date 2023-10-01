KONTAKTNÍ FORMULÁŘ

Odesílá email na danou adresu.
Klient vyplní své jméno, e-mail a zprávu, kterou chce doručit a po kliknutí na odeslat přijde na emai

    aplikace se skládá z dvou částí a to:
        client:
            zde se nachází react a taiwindCSS pro front-end část

        node_modules + index.js:
            toto obsahuje back-end server, který řeší odesílání a příjmá emailů
            autentifikaci do vašeho gmailu


aplikace je postavená na systému Windows 11 a je také plně otestována
při pokusu o odeslání e-mailu lokálně na Macu se tomu tak nestalo

Na Windows ale ano.

________________________________________________
PRO FUNGOVÁNÍ JE POTŘEBA UDĚLAT PÁR VĚCÍ:
    Ve vašem Google účtu vygenerovat heslo pro aplikaci z třetí strany, pro povolení přístupu
    Vyplnit v Index.js e-mail, na který budou chodit příchozí e-maily.


Vše je testováno a odesíláno pouze lokálně mezi localhost:3000, kde běží front-end a localhost:3001, kde běží index.js se serverem.


PRO INTEGROVÁNÍ DO VLASTNÍHO SYSTÉMU JE POTŘEBA SLOŽITĚJŠÍ POSTUP
    KDE BUDE SPUŠTĚNÍ NÉ LOKÁLNÍ ALE NA SERVERU


    TOTO FUNGUJE POUZE LOKÁLNĚ!!

___________________________________________________
vytvořil Losenský Ondřej, dne 29.9.2023

