const GAPI_CLIENT_ID = '161582096349-1q0k56j4up4p9jh6e0uc7a246337hj2m.apps.googleusercontent.com';
const API_CALENDAR_KEY ='AIzaSyCE617nwvWxLAhhGIcI-cNyaydPl5JljBM';
const GAPI_DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const GAPI_SCOPES = 'https://www.googleapis.com/auth/calendar.events';

let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_CALENDAR_KEY,
        discoveryDocs: [GAPI_DISCOVERY_DOCS],
    });
    gapiInited = true;
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GAPI_CLIENT_ID,
        scopes: GAPI_SCOPES,   
        callback: '', 
    });
    console.log('GIS loaded');
    gisInited = true;
}

function createEvent(eventDetails){
    console.log('Creating event');
    gapiLoaded();
    gisLoaded();
    console.log(eventDetails);
    console.log(gapiInited);
    console.log(gisInited);
    console.log(tokenClient);
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        await schechuleEvent(eventDetails);
    }
    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
        tokenClient.requestAccessToken({prompt: ''});
    }
}

function schechuleEvent(eventDetails){
    const event = {
        'summary': eventDetails.service,
        'description': `Nombre: ${eventDetails.name} \n Celular Contacto: ${eventDetails.cellphone}`,
        'start': {
            'dateTime': eventDetails.eventTime,
            'timeZone': 'America/Mexico_City'
        },
        'end': {
            'dateTime': new Date(new Date(eventDetails.eventTime).getTime() + 30*60000).toISOString(),  
            'timeZone': 'America/Mexico_City'
        },
    };
    const request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
    });
    request.execute(event => {
        console.log('Event created: ' + event.htmlLink);
    });
}

function getGoogleEvents(){
 console.log('getting events');
}