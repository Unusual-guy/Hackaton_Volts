const admin = require('firebase-admin');
const serviceAccount = require('./secret/serviceAccountKey');
const { lowerCase } = require('lodash');
const { INTENT, getIntent } = require('./src/nlu');
const lex = require('./src/lexicon');

// Инициализируем Firestore:
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackathon-29aee-default-rtdb.europe-west1.firebasedatabase.app"
});

// Устанавливаем связь с БД, в которой будем хранить список данных устройства (компания Volts):
const db = admin.firestore();
const usersRef = db.collection('users');


// Тело Yndex Cloude Function:
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

    // Получаем и переводим в нижний регистр сказанную юзером фразу:
    const userUtterance = lowerCase(request.original_utterance);

    // Обращаемся к БД за данными:
    const userSnapshot = await usersRef.where(server.FieldPath.documentId(), '==', userId).get();
    let userData = {};

    // Получаем данные из БД:
    userSnapshot.forEach(doc => {
      userData = doc.data();
    });

    // Определяем намерение пользователя:
    const intent = getIntent(userUtterance, context);


    // ДИАЛОГ С ПОЛЬЗОВАТЕЛЕМ:



    ......
   


    // Запись в БД нового состояния приложения сразу после ответа Алисе (т.е. после return), чтобы отвечать максимально быстро:
    setImmediate(async (userId, memory, context, isReview, serverTime, memTime) => {
      await usersRef.doc(userId).set({
        ctx: context,
        mem: memory,
        review: isReview,
        timestamp1: serverTime,
        timestamp2: memTime
      });
    }, userId, memory, context, isReview, serverTime, memTime);


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
