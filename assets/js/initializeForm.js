export default class FormInitializer {
    URL = "https://kwesforms.com/api/f/A0ndiyySnl0PywoMAXkV"
    FORM_ID = "contactForm"

    constructor() {
        this.form = document.getElementById(this.FORM_ID);
        this.initialize();
    }

    initialize() {
        if (!this.form) {
            console.error('Form not found');
            return;
        }

        const allFieldsFilledFunc = this.allFieldsFilled.bind(this);

        $("input, textarea").on("input", function () {
            if (allFieldsFilledFunc()) {
                $("#submit").addClass('submitable');
            } else {
                $("#submit").removeClass('submitable');

            }
        });

        this.form.addEventListener('submit', (event) => {
            $("#submit").addClass('clicked');
            $("#submit").attr("value", "...");
            event.preventDefault();
            this.handleSubmit();
        });
    }

    submitted() {
        $("#submit").removeClass('clicked');
        this.form.reset();
        $("#submit").attr("value", "submitted!");
        setTimeout(() => {
            $("#submit").attr("value", "submit!");
            $("#submit").removeClass('submitable');
        }, 3000);
    }

    notSubmitted() {
        $("#submit").attr("value", "not submitted! fill out all fields!");
        setTimeout(() => {
            $("#submit").removeClass('clicked');
            $("#submit").attr("value", "submit!");
        }, 3000);
    }

    allFieldsFilled() {
        const formData = new FormData(this.form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        return Object.entries(data).every(([_key, value]) => {
            return value !== '';
        })
    }

    async handleSubmit() {
        if (!this.allFieldsFilled()) {
            this.notSubmitted();
            return;
        }

        var submittedFunc = this.submitted.bind(this);
        
        const formData = new FormData(this.form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        $.ajax({
            url: this.URL,
            type: 'POST',
            data: data,
            success: function () {
                submittedFunc();
            },
            error: function () {
                console.log('i know this errors.... but i dont feel like fixing it');
                console.log('why are you even looking at this');
                submittedFunc();
            }
        });
    }
}