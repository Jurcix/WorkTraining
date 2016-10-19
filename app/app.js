$('document').ready(function () {
    $.ajaxSetup({
        headers: {
            'X-Appery-Database-Id':'57f60640e4b0a2e20f4851c0',
            'X-Appery-Master-Key':'960010b9-ad4e-41f4-b900-6f4836236fe2',
            'Content-Type': 'application/json'
        }
    });

        var mainView = new MainView({
            el: $("#my-app"),
            model: Rectangle
        });
    }
);

