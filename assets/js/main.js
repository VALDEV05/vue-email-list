const app = new Vue({
    el: '#app',
    data: {
        email: ''
    },
    methods: {
        generateEmail(url) {
            axios
                .get(url)
                .then(response => {
                    this.email = response.data.response
                    console.log(this.email)
                })
        }
    },
    mounted() {

        this.generateEmail('https://flynn.boolean.careers/exercises/api/random/mail')

        //creo la chiamata tramite l'utilizzo di axios
        /* axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.email = response.data.response
                console.log(this.email)
            }) */


    }
})

/*
Request
    Descrizione:
        Attraverso l'apposita API di Boolean
        https://flynn.boolean.careers/exercises/api/random/mail
        generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
    Bonus
        Far comparire gli indirizzi email solamente quando sono stati tutti generati. */