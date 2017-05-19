function main() {
    $("button#share").click(function () {
        IN.User.authorize(getProfileData);
    })
}

function getProfileData() {
    // lots of things available here. more details at:
    // https://developer.linkedin.com/docs/fields/basic-profile
    // http://stackoverflow.com/q/8593144/564709
    IN.API.Raw("/people/~:("
               + "id,"
               + "industry,"
               + "positions:(id,title,start-date,end-date,company:(id,name,type,size,industry)),"
               + "skills:(id,skill:(name)),"
               + "educations:(id,school-name,degree,field-of-study,start-date,end-date)"
           + ")?format=json").result(storeProfileData)
}

function storeProfileData(data) {

    $.ajax({
        url: "/person",
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),

        complete: function () {console.log("complete")},
        success: function () {console.log("success")},
        error: function () {console.log("error")},
    })

}
