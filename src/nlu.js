const { includes } = require('lodash');

module.exports = {

  // Намерения пользователя
  INTENT: {
    give_idDevice: 'give_idDevice',                                   // юзер хочет узнать номер устройства
    give_day: 'give_day',                                            // юзер хочет узнать дату
    give_output_active_power: 'give_output_active_power',           // юзер хочет узнать активную мощность
    give_battery_capacity: 'give_battery_capacity',                // юзер хочет узнать емкость батареи
    give_solar_panel_input_power: 'give_solar_panel_input_power', // юзер хочет узнать выходную мощность солнечной панели
    give_status: 'give_status',                                  // юзер хочет узнать статус
    give_generge_total: 'give_generge_total',                   // юзер хочет узнать общую энергию 
    give_generge_year: 'give_generge_year',                    // юзер хочет узнать годовую энергию
    give_generge_month: 'give_generge_month',                 // юхер хочет узнать месячную энергию
    give_generge_day: 'give_generge_day',                    // юзер хочет узнать дневную энергию
    give_energe_fPhase: 'give_energe_fPhase',               // юзер хочет узнать енергию первой фазы
    give_energe_sPhase: 'give_energe_sPhase',              // юзер хочет узнать енергию второй фазы
    give_energe_tPhase: 'give_energe_tPhase',             // юзер хочет узнать енергию третьей фазы
    repeat: 'repeat',                                    // юзер просит повторить
    exit: 'exit',                                       // юзер хочет выйти из навыка
  },

  getIntent: function (userPhrase, intent) {

    // Пользователь хочет узнать номер устройства:  
    const give_idDeviceSnippet = ['скажи номер устройства', 'какой номер у устройства', 'скажи ID', 
    'номер устройства', 'номер моего устройства', 'ID устройства', 'ID моего устройства',
    'Скажи ID моего устройства',];

    for (let item of give_idDeviceSnippet) {
        if (includes(userPhrase, item)) {
            return 'give_idDevice';
        }
    }

    // Пользователь хочет узнать дату:  
    const give_daySnippet = ['скажи дату', 'скажи сегодняшнюю дату', 'скажи какой сегодня день', 'какой сегодня день',
    'какое сегодня число',];
    for (let item of give_daySnippet) {
        if (includes(userPhrase, item)) {
            return 'give_day';
        }
    }

   // Пользователь хочет узнать активную мощность:  
   const give_output_active_powerSnippet = ['скажи выходную активную мощность', 'скажи активную мощность', 'скажи мощность', 'какая активная мощность',];
   for (let item of give_output_active_powerSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_output_active_power';
       }
   }

   // Пользователь хочет узнать емкость батареи:  
   const give_battery_capacitySnippet = ['скажи емкость батареи', 'какова емкость батареи', 'какая емкость у батареи', 'скажи мне какая емкость у батареи' , 'скажи мне какая емкость батареи',];
   for (let item of give_battery_capacitySnippet) {
       if (includes(userPhrase, item)) {
           return 'give_battery_capacity';
       }
   }

   // Пользователь хочет узнать выходную емкость солнечной панели:  
   const give_solar_panel_input_powerSnippet = ['скажи выходную мощность солнечной панели', 'скажи мне выходную мощность солнечной панели', 'какая выходная мощность солнечной панели', 'какая выходная мощность у солнечной панели', 'скажи мне мощность солнечной панели', 'какая мощность у солнечной панели', 'скажи мощность панели', 'какая мощность панели',];
   for (let item of give_solar_panel_input_powerSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_solar_panel_input_power';
       }
   }

   // Пользователь хочет узнать статус:  
   const give_statusSnippet = ['какой статус','скажи статус','скажи мне статус', 'скажи мне какой сейчас статус', 'какой сейчас статус', 'какой у меня статус',];
   for (let item of give_statusSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_status';
       }
   }
   
   // Пользователь хочет узнать общую энергию:  
   const give_generge_totalSnippet = ['скажи общую энергию', 'какая сейчас общая энергия', 'скажи мне общую энергию', 'скажи мне какая сейчас общая энергия',];
   for (let item of give_generge_totalSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_generge_total';
       }
   }

   // Пользователь хочет узнать годовую энергию:  
   const give_generge_yearSnippet = ['скажи годовую энергию', 'какая сейчас годовая энергия', 'скажи мне годовую энергию', 'скажи мне какая сейчас годовая энергия',];
   for (let item of give_generge_yearSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_generge_year';
       }
   }

   // Пользователь хочет узнать месячную энергию:  
   const give_generge_monthSnippet = ['скажи месячную энергию', 'какая сейчас месячная энергия', 'скажи мне месячная энергию', 'скажи мне какая сейчас месячная энергия',];
   for (let item of give_generge_monthSnippet) {
       if (includes(userPhrase, item)) {
           return 'give_generge_month';
       }
   }

   // Пользователь хочет узнать дневную энергию:  
   const give_generge_daySnippet = ['скажи дневную энергию', 'какая сейчас дневная энергия', 'скажи мне дневная энергию', 'скажи мне какая сейчас дневная энергия',];
   for (let item of give_generge_daySnippet) {
       if (includes(userPhrase, item)) {
           return 'give_generge_day';
       }
   }

   // Пользователь хочет узнать энергию второй фазы:  
   const give_energe_fPhaseSnippet = ['скажи энергию первой фазы', 'какая энергия в первой фазе ', 'скажи мне энергию первой фазы', 'скажи мне какая энергия в первой фазе',];
   for (let item of give_energe_fPhase) {
       if (includes(userPhrase, item)) {
           return 'give_energe_firstPhase';
       }
   }

   // Пользователь хочет узнать энергию второй фазы:  
   const give_energe_sPhaseSnippet = ['скажи энергию второй фазы', 'какая энергия во второй фазе ', 'скажи мне энергию второй фазы', 'скажи мне какая энергия во второй фазе'];
   for (let item of give_energe_sPhase) {
       if (includes(userPhrase, item)) {
           return 'give_energe_sPhase';
       }
   }

   // Пользователь хочет узнать энергию третьей фазы:  
   const give_energe_tPhaseSnippet = ['скажи энергию третьей фазы', 'какая энергия в третьей фазе ', 'скажи мне энергию третьей фазы', 'скажи мне какая энергия в третьей фазе',];
   for (let item of give_energe_tPhase) {
       if (includes(userPhrase, item)) {
           return 'give_energe_tPhase';
       }
   }

    // Пользователь просит повторить:
    const repeatSnippet = ['повтори', 'повторить', 'повторите', 'повторно', 'повтор', 'не расслышал',
      'не расслышала', 'не услышал', 'не услышала', 'не понял', 'не поняла', 'не слышно', 'плохо слышно',
      'что ты сказал', 'что вы сказали', 'скажи еще раз', 'скажите еще раз',];

    for (let item of repeatSnippet) {
      if (includes(userPhrase, item)) {
        return 'repeat';
      }
    }

    // Пользователь хочет выйти из навыка:
    const exitSnippet = ['завершить', 'хватит', 'достаточно', 'закрыть', 'закрой', 'закрывай', 'закрывайте',
      'выйти', 'выход', 'закончить', 'алиса вернись', 'вернись алиса', 'до свидания', 'до свиданья', 'до встречи',
      'до следующей встречи', 'до новой встречи', 'спокойной ночи', 'до завтра',];

    for (let item of exitSnippet) {
      if (includes(userPhrase, item)) {
        return 'exit';
      }
    }
    // Если польователь сказал неразборчиво
    return 'fallback';
  }
};
