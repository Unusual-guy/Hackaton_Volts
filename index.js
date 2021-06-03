const admin = require('firebase-admin');
const serviceAccount = require('./secret/serviceAccountKey.json');
const { lowerCase } = require('lodash');
const { INTENT, getIntent } = require('./src/nlu');
const lex = require('./src/lexicon');

// Инициализируем Firestore:
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackathon-29aee-default-rtdb.europe-west1.firebasedatabase.app"
});

// Устанавливаем связь с БД, из которой будем брать конкретные данные устройства (компания Volts):
const db = admin.firestore();


// Тело Yandex Cloude Function:
module.exports.skill = async (event) => {
  try {
    // Получаем из события запрос Алисы необходимые данные:
    const { request, session, version } = event;

    // Быстрый ответ на пингование Алисы:
    if (request.original_utterance === 'ping') {
      return {
        version,
        session,
        response: {
          text: 'ОК',
          end_session: true
        }
      };
    }

    // Голосовое и звуковое сообщение юзеру:
    let ttsMsg = '';

    // Приветствуем пользователя
    let ttsMSG1 = '';

    // Прощаемся в пользователем
    let ttsMSG2 = '';

    // Получаем и переводим в нижний регистр сказанную юзером фразу:
    const userUtterance = lowerCase(request.original_utterance);

     // Определяем намерение пользователя:
     const intent = getIntent(userUtterance, intent);


    // Обращаемся к БД за данными:
    const userSnapshot = await usersRef.where(server.FieldPath.documentId(), '==', userId).get();
    let userData = {};

    // Получаем данные из БД:
    userSnapshot.forEach(doc => {
      userData = doc.data();
    });


    // Инициализируем переменные, которые будут принимать значения из базы данных
    let didDevice = 0;
    let dday = 0;
    let doutput_active_power = 0;
    let dbattery_capacity = 0;
    let dsolar_panel_input_power = 0;
    let dstatus = 0;
    let dgenerge_total = 0;
    let dgenerge_year = 0;
    let dgenerge_month = 0;
    let dgenerge_day = 0;
    let denerge_fPhase = 0;
    let denerge_sPhase = 0;
    let denerge_tPhase = 0;


    // Получаем конкретные данные из БД 
    if(!isEmpty(userData)) {
      didDevice = userData && userData.dat;
      dday = userData && userData.dat;
      doutput_active_power = userData && userData.dat;
      dbattery_capacity = userData && userData.dat;
      dsolar_panel_input_power = userData && userData.dat;
      dstatus = userData && userData.dat;
      dgenerge_total = userData && userData.dat;
      dgenerge_year = userData && userData.dat;
      dgenerge_month = userData && userData.dat;
      dgenerge_day = userData && userData.dat;
      denerge_fPhase = userData && userData.dat;
      denerge_sPhase && userData.dat;
      denerge_tPhase && userData.dat;
    }


    // ДИАЛОГ С ПОЛЬЗОВАТЕЛЕМ:
    let msg = ''; // переменная, в которой будет храниться ответ Алисы пользователю (полный ответ: реплика Алисы, конкретные данные из БД)
    let msg1 = '';
    msg1 = `${sample(lex.hello)}`;
    ttsMSG1 = `${msg1}`; // Приветствие Алисы

    if (intent === INTENT.give_idDevice){
      msg = `${sample(lex.idDevice)} ${didDevice} ${lex.polite}`;
    } else if (intent === INTENT.give_day){
      msg = `${sample(lex.give_day)} ${dday} ${lex.polite}`;
    } else if (intent === INTENT.give_output_active_power){
      msg = `${sample(lex.give_output_active_power)} ${doutput_active_power} ${lex.polite}`;
    } else if (intent === INTENT.give_battery_capacity){
      msg = `${sample(lex.give_battery_capacity)} ${dbattery_capacity} ${lex.polite}`;
    } else if (intent === INTENT.give_solar_panel_input_power){
      msg = `${sample(lex.give_solar_panel_input_power)} ${dsolar_panel_input_power} ${lex.polite}`;
    } else if (intent === INTENT.give_status){
      msg = `${sample(lex.give_status)} ${dstatus} ${lex.polite}`;
    } else if (intent === INTENT.give_generge_total){
      msg = `${sample(lex.give_generge_total)} ${dgenerge_total} ${lex.polite}`;
    } else if (intent === INTENT.give_generge_year){
      msg = `${sample(lex.give_generge_year)} ${dgenerge_year} ${lex.polite}`;
    } else if (intent === INTENT.give_generge_month){
      msg = `${sample(lex.give_month)} ${dgenerge_month} ${lex.polite}`;
    } else if (intent === INTENT.give_generge_day){
      msg = `${sample(lex.give_day)} ${dgenerge_day} ${lex.polite}`;
    } else if (intent === INTENT.give_energe_fPhase){
      msg = `${sample(lex.give_energe_fPhase)} ${denerge_fPhase} ${lex.polite}`;
    } else if (intent === INTENT.give_energe_sPhase){
      msg = `${sample(lex.give_energe_sPhase)} ${denerge_sPhase} ${lex.polite}`;
    } else if (intent === INTENT.give_energe_tPhase){
      msg = `${sample(lex.give_energe_tPhase)} ${denerge_tPhase} ${lex.polite}`;
    } else if (intent === INTENT.repeat){
      msg =  `${sample(lex.repeat_now)} `;
    } else if (intent === INTENT.exit){
      ttsMSG2 = `${sample(lex.bye)}`; // Прощание Алисы
    }
    ttsMsg = `${msg}`;

   
    // Ответ Алисе:
    return {
      version,
      session,
      response: {
        text: ' ',
        tts: ttsMsg,
        end_session: isEndSession
      }
    };

    // Обработка возможных ошибок:
  } catch (err) {
    console.error(err);
    return {
      'statusCode': 500,
      'headers': {
        'Content-Type': 'text/plain'
      },
      'isBase64Encoded': false,
      'body': `Internal server error: ${err}` // TODO скрыть переменную err в продакшн-версии.
    };
  }
};
