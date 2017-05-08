function main() {

    console.log(IN.User.isAuthorized())
    IN.User.authorize(onAuthentication)
}

function onAuthentication() {
    console.log(IN.User.isAuthorized())

    // lots of things available here. more details at:
    // https://developer.linkedin.com/docs/fields/basic-profile
    // http://stackoverflow.com/q/8593144/564709
    IN.API.Raw("/people/~:(id,picture-url,industry,positions,skills,educations:(id,school-name,degree,field-of-study))?format=json").result(storePositionHistory)
}

function storePositionHistory(data) {
    console.log(data)
}
