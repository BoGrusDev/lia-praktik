class TemplateController {
    constructor() {}

    init() {
    }

    dataLoad () {
        Model.dataLoad()
        .then(response => response.json())
        .then(function(data) {   
            View.dataShow(data); 
        })
        .catch(error => alert(error))
        
    }

}
