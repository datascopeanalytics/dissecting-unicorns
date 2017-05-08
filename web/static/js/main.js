function main() {
    IN.User.authorize(onAuthentication)
}

function onAuthentication() {
    // lots of things available here. more details at:
    // https://developer.linkedin.com/docs/fields/basic-profile
    // http://stackoverflow.com/q/8593144/564709
    IN.API.Raw("/people/~:(id,picture-url,industry,positions,skills,educations:(id,school-name,degree,field-of-study))?format=json").result(storePositionHistory)
}

function storePositionHistory(data) {
    console.log(data);
    console.log('wow');

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

    // $.post(, data, function(d) {console.log('success', d)}, 'json')
    //     .done(function () {console.log('done')})
    //     .fail(function () {console.log('fail')});

    console.log('hrmpf');

}
