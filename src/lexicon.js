module.exports = {
    /* Словарный запас навыка */
    hello: ['Привет!', 'Приветствую тебя!', 'Салют!', 'Здравствуйте!'],
  
    promtgive_idDevice: [
        'Хочешь узнать номер устройства?',
        'Вы хотите узнать номер устройства?',
        'Вам хочется узнать номер устройства?',
    ],

    idDevice: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Номер устройства',
    ],


    promtgive_day: [
        'Хочешь узнать сегодняшнюю дату?',
        'Вы хотите узнать какой сегодня день недели?',
        'Вы хотите узнать какой сегодня день?',
    ],

    give_day: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Сегодня',
    ],


    promtgive_output_active_power: [
        'Хочешь узнать активную мощность устройства?',
        'Вы хотите узнать активную мощность вашего устройства?',
    ],

    give_output_active_power: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Активную мощность вашего устройства',
    ],


    promtgive_battery_capacity: [
        'Хочешь узнать ёмкость батареи?',
        'Вы хотите узнать емкость батареи?',
        'Хотите узнать ёмкость вашей батареи?',
    ],

    give_battery_capacity: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Ёмкость вашей батареи',
    ],


    promtgive_solar_panel_input_power: [
        'Хочешь узнать выходную мощность солнечной панели?',
        'Вы хотите узнать выходную мощность солнечной панели?',
        'Хотите узнать выходную мощность солнечной панели?',
    ],

    give_solar_panel_input_power: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Выходную мощность солнечной панели',
    ],


    promtgive_status: [
        'Хочешь узнать статус устройства?',
        'Вы хотите узнать статус устройства?',
        'Хотите узнать статус устройства?',
    ],

    give_status: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Статус вашего устройства?',
    ],


    promtgive_generge_total: [
        'Хочешь узнать общую энергию?',
        'Вы хотите узнать общую энергию?',
        'Хотите узнать общую энергию?',
    ],

    give_generge_total: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Общая энергия',
    ],


    promtgive_generge_year: [
        'Хочешь узнать годовую энергию?',
        'Вы хотите узнать годовую энергию?',
        'Хотите узнать годовую энергию?',
    ],

    give_generge_year: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Годовая энергия',
    ],


    promtgive_generge_month: [
        'Хочешь узнать месячную энергию?',
        'Вы хотите узнать месячную энергию?',
        'Хотите узнать месячую энергию?',
    ],

    give_generge_month: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Месячная энергия',
    ],


    promtgive_generge_day: [
        'Хочешь узнать дневную энергию?',
        'Вы хотите узнать дневную энергию?',
        'Хотите узнать дневную энергию?',
    ],

    give_generge_day: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Дневная энергия',
    ],

    promtgive_energe_fPhase: [
        'Хочешь узнать энергию первой фазы?',
        'Вы хотите узнать энергию первой фазы?',
        'Хотите узнать энергию первой фазы?',
    ],

    give_energe_fPhase: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Энергия первой фазы?',
    ],


    promtgive_energe_sPhase: [
        'Хочешь узнать энергию второй фазы?',
        'Вы хотите узнать энергию второй фазы?',
        'Хотите узнать энергию второй фазы?',
    ],

    promtgive_energe_sPhase: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Энергия второй фазы',
    ],


    promtgive_energe_tPhase: [
        'Хочешь узнать энергию третьей фазы?',
        'Вы хотите узнать энергию третьей фазы?',
        'Хотите узнать энергию третьей фазы?',
    ],

    give_energe_tPhase: [
        '<speaker audio="alice-sounds-game-powerup-2.opus"> Энергия третьей фазы',
    ],








  
    memoryFull2: 'Цитирую <speaker audio="alice-sounds-game-ping-1.opus">',
  
  
    // когда фраза пользователя не понята
    fallback: [ 
      'Пожалуйста, повторите еще раз.',
      'Я не совсем поняла, повторите еще раз.',
      'Вас плохо понятно, могли бы вы сказать еще раз?',
    ],
  
    endSession: ['На этом мы закончим наш диалог', 'Я заканчиваю этот диалог.'],
  
    bye: ['До свидания.', 'До новых встречь.'],
  
    byeEmpty: [
      'Когда надо узнать данные, проси Алису запустить навык',
      'Когда надо узнать данные, запускай навык'
    ]
};
