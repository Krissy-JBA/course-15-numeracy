pageComponentry = {
    data: function() {
        return {
            // Any page specific data goes here.
            module1: false,
            module2: false,
            module3: false,
            module4: false,
            module5: false,
            modulesComplete: false
        }
    },
    methods: {
        // Any page specific methods go here.
    },
    ready: function() {
        courseFeatureJBA.transitionIn();
        courseFeatureJBA.activateDataPopups();

        var currentPage = this.exerciseData['page.max']
        if (currentPage >= 35) {
            this.module2 = true;
        }
        if (currentPage >= 75) {
            this.module3 = true;
        }
        if (currentPage >= 84) {
            this.module4 = true;
        }
        if (currentPage >= 105) {
            this.module5 = true;
        }

    }

}
