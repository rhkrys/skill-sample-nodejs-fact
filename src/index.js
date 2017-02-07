'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = ' amzn1.ask.skill.5cc61b6d-8a2f-440a-9877-ec4193002cc8';  // TODO replace with your app ID (OPTIONAL)

var languageStrings = {
    "en-GB": {
        "translation": {
            "FACTS": [
                'In case you ever foolishly forget I am never not thinking about you.',
                'You know you are in love when you can not fall asleep because reality is finally better than your dreams.',
                'There is never a time or place for true love. It happens accidentally in a heartbeat in a single flashing throbbing moment.',
                'For the two of us home is not a place it is a person and we are finally home.',
                'They say when you are missing someone that they are probably feeling the same but I dont think its possible for you to miss me as much as Im missing you right now.',
                'So it is not gonna be easy. It is going to be really hard we are gonna have to work at this everyday but I want to do that because I want you. I want all of you forever everyday. You and me ... every day.',
                'Anyone who falls in love is searching for the missing pieces of themselves. So anyone whos in love gets sad when they think of their lover. Its like stepping back inside a room you have fond memories of one you havent seen in a long time.',
                'Love is like the wind you cant see it but you can feel it.',
                'To love at all is to be vulnerable.',
                'Every heart sings a song incomplete until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover everyone becomes a poet.',
                'We love with a love that was more than love.',
                'Love looks not with the eyes but with the heart.',
            ],
            "SKILL_NAME" : "British Heart Facts",
            "GET_FACT_MESSAGE" : "Here's your heart fact: ",
            "HELP_MESSAGE" : "You can say tell me a heart fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                'In case you ever foolishly forget I am never not thinking about you.',
                'You know you are in love when you can not fall asleep because reality is finally better than your dreams.',
                'There is never a time or place for true love. It happens accidentally in a heartbeat in a single flashing throbbing moment.',
                'For the two of us home is not a place it is a person and we are finally home.',
                'They say when you are missing someone that they are probably feeling the same but I dont think its possible for you to miss me as much as Im missing you right now.',
                'So it is not gonna be easy. It is going to be really hard we are gonna have to work at this everyday but I want to do that because I want you. I want all of you forever everyday. You and me ... every day.',
                'Anyone who falls in love is searching for the missing pieces of themselves. So anyone whos in love gets sad when they think of their lover. Its like stepping back inside a room you have fond memories of one you havent seen in a long time.',
                'Love is like the wind you cant see it but you can feel it.',
                'To love at all is to be vulnerable.',
                'Every heart sings a song incomplete until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover everyone becomes a poet.',
                'We love with a love that was more than love.',
                'Love looks not with the eyes but with the heart.',
            ],
            "SKILL_NAME" : "American Heart Facts",
            "GET_FACT_MESSAGE" : "Here's your heart fact: ",
            "HELP_MESSAGE" : "You can say tell me a heart fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
}
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
