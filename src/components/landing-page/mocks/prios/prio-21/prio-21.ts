import { Prio } from '../../../utils/types';

const prio: Prio = {
  variation: [
    {
      color: '#00b649',
      order: ['title', 'list', 'html'],
      head: 1,
      title: 1,
      html: -1,
      list: 1,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          q17347: [
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17348:
                      '2020>>>OR>>>2019>>>OR>>>2018>>>OR>>>2017>>>OR>>>2016>>>OR>>>2015>>>OR>>>2014>>>OR>>>2013>>>OR>>>2012 oder davor',
                  },
                  {
                    q17358:
                      '>>>NOT>>>§ 19d>>>NOT>>>§ 25a>>>NOT>>>§ 25b>>>NOT>>>§ 16a>>>NOT>>>§ 16b>>>NOT>>>§ 16d>>>NOT>>>§ 16e>>>NOT>>>§ 16f>>>NOT>>>§ 17>>>NOT>>>§ 18f>>>NOT>>>§ 19>>>NOT>>>§ 19b>>>NOT>>>§ 19e>>>NOT>>>§ 20>>>NOT>>>§ 22>>>NOT>>>§ 23a>>>NOT>>>§ 24>>>NOT>>>§ 25 Abs. 3>>>NOT>>>§ 25 Abs. 4>>>NOT>>>§ 25 Abs. 5>>>NOT>>>§ 104c',
                  },
                  {
                    q17356: 'Unbefristetes Aufenthaltsrecht>>>OR>>>EU-Bürger',
                  },
                  {
                    q17369: 'B1>>>OR>>>B2>>>OR>>>C1>>>OR>>>C2',
                  },
                  {
                    q17368:
                      '9. Klasse Abschluss>>>OR>>>10. Klasse Abschluss>>>OR>>>Abitur oder Fachabitur>>>OR>>>Ausbildung>>>OR>>>Studium',
                  },
                  {
                    q17370: 'Ja',
                  },
                  {
                    q18261: 'Nein',
                  },
                  {
                    q17375: 'Ja',
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      color: '#ffaa02',
      order: ['title', 'list', 'html'],
      head: 2,
      title: 2,
      html: 2,
      list: 2,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          q17347: [
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17348:
                      '2020>>>OR>>>2019>>>OR>>>2018>>>OR>>>2017>>>OR>>>2016>>>OR>>>2015>>>OR>>>2014>>>OR>>>2013>>>OR>>>2012 oder davor',
                  },
                  {
                    q17358: '§ 19d>>>OR>>>§ 25a>>>OR>>>§ 25b',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17348: '2021>>>OR>>>2022>>>OR>>>2023',
                  },
                  {
                    q17358:
                      '>>>NOT>>>§ 19d>>>NOT>>>§ 25a>>>NOT>>>§ 25b>>>NOT>>>§ 16a>>>NOT>>>§ 16b>>>NOT>>>§ 16d>>>NOT>>>§ 16e>>>NOT>>>§ 16f>>>NOT>>>§ 17>>>NOT>>>§ 18f>>>NOT>>>§ 19>>>NOT>>>§ 19b>>>NOT>>>§ 19e>>>NOT>>>§ 20>>>NOT>>>§ 22>>>NOT>>>§ 23a>>>NOT>>>§ 24>>>NOT>>>§ 25 Abs. 3>>>NOT>>>§ 25 Abs. 4>>>NOT>>>§ 25 Abs. 5>>>NOT>>>§ 104c',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17356: 'Fiktionsbescheinigung',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17369: 'Nein>>>OR>>>A1>>>OR>>>A2',
                  },
                  {
                    q17368:
                      '>>>NOT>>>9. Klasse Abschluss>>>NOT>>>10. Klasse Abschluss>>>NOT>>>Abitur oder Fachabitur>>>NOT>>>Ausbildung>>>NOT>>>Studium',
                  },
                  {
                    q17370: '>>>NOT>>>Ja',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q18261: 'Ja>>>OR>>>Keine Angabe',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17375: 'Nein',
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      color: '#ec2556',
      order: ['title', 'list', 'html'],
      head: 3,
      title: 3,
      html: 3,
      list: 3,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          q17347: [
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17348: '2024>>>OR>>>2025',
                  },
                ],
              },
            },
            {
              value: 'Einbürgerung',
              extra: {
                mode: 'every',
                condition: [
                  {
                    q17358:
                      '§ 16a>>>OR>>>§ 16b>>>OR>>>§ 16d>>>OR>>>§ 16e>>>OR>>>§ 16f>>>OR>>>§ 17>>>OR>>>§ 18f>>>OR>>>§ 19>>>OR>>>§ 19b>>>OR>>>§ 19e>>>OR>>>§ 20>>>OR>>>§ 22>>>OR>>>§ 23a>>>OR>>>§ 24>>>OR>>>§ 25 Abs. 3>>>OR>>>§ 25 Abs. 4>>>OR>>>§ 25 Abs. 5>>>OR>>>§ 104c',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  ],
  successBox: {
    head: [
      {
        variationId: 1,
        content: {
          primary: 'Vielen Dank für Ihre Anfrage:',
          secondary: 'Sie erfüllen alle Voraussetzungen!',
        },
        condition: null,
      },
      {
        variationId: 2,
        content: {
          primary: 'Vielen Dank für Ihre Anfrage:',
          secondary: 'Voraussetzungen nur teilweise erfüllt',
        },
        condition: null,
      },
      {
        variationId: 3,
        content: {
          primary: 'Vielen Dank für Ihre Anfrage:',
          secondary: 'Voraussetzungen nicht erfüllt',
        },
        condition: null,
      },
    ],
    body: {
      title: [
        {
          variationId: 1,
          content:
            'Unsere Analyse hat ergeben, dass Sie alle Voraussetzungen für den Antrag auf die deutsche Staatsbürgerschaft erfüllen.',
          condition: null,
        },
        {
          variationId: 2,
          content: 'Unsere Analyse hat ergeben, dass Sie Folgende Voraussetzungen noch erfüllen müssen',
          condition: null,
        },
        {
          variationId: 3,
          content: 'Leider können wir Ihnen aktuell nicht helfen',
          condition: null,
        },
      ],
      html: [
        {
          variationId: 1,
          content: '',
          condition: {
            forceResult: 'none',
            mode: 'some',
            screen: null,
            form: {
              q17347: [
                {
                  value: 'Einbürgerung',
                  extra: null,
                },
              ],
            },
          },
        },
        {
          variationId: 2,
          content:
            '<div style="margin-top: -8px; margin-bottom: 16px; line-height: 24px; font-weight:300;">Sie erfüllen nur einige Voraussetzungen, um die deutsche Staatsbürgerschaft zu beantragen. Hier erfahren Sie, was das bedeutet und welche nächsten Schritte Sie eingehen können.</div>',
          condition: {
            forceResult: 'none',
            mode: 'some',
            screen: null,
            form: {
              q17347: [
                {
                  value: 'Einbürgerung',
                  extra: null,
                },
              ],
            },
          },
        },
        {
          variationId: 3,
          content:
            '<div style="margin-top: -8px; margin-bottom: 16px; line-height: 24px; font-weight:300;">Basierend auf Ihren Angaben können wir unseren Service derzeit nicht anbieten. Wir empfehlen Ihnen, den Test regelmäßig durchzuführen, um sofort zu sehen, ob Sie die Voraussetzungen erfüllen.</div>',
          condition: {
            forceResult: 'none',
            mode: 'some',
            screen: null,
            form: {
              q17347: [
                {
                  value: 'Einbürgerung',
                  extra: null,
                },
              ],
            },
          },
        },
      ],
      list: [
        {
          variationId: 1,
          content: {
            priority: ['exclamation', 'check', 'question', 'cross'],
            content: [
              {
                type: 'check',
                content:
                  '<span>Aufenthalt in Deutschland:</span> Es sieht aus als würden Sie die zeitlichen Voraussetzungen erfüllen. Die Berechnung der Aufenthaltszeiten ist allerdings rechtlich kompliziert.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17348: [
                      {
                        value:
                          '2020>>>OR>>>2019>>>OR>>>2018>>>OR>>>2017>>>OR>>>2016>>>OR>>>2015>>>OR>>>2014>>>OR>>>2013>>>OR>>>2012 oder davor',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Sprachkenntnisse:</span> Sie haben ein ausreichendes Sprachzertifikat.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17369: [
                      {
                        value: 'B1>>>OR>>>B2>>>OR>>>C1>>>OR>>>C2',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Ausbildung:</span> Ihre Ausbildung in Deutschland ist hoch genug für den notwendigen Sprachnachweis.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17368: [
                      {
                        value:
                          '9.Klasse Abschluss>>>OR>>>10.Klasse Abschluss>>>OR>>>Abitur oder Fachabitur>>>OR>>>Ausbildung>>>OR>>>Studium',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Einbürgerungstest:</span> Sie können den Einbürgerungstest vorweisen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17370: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sie beziehen derzeit kein Bürgergeld. Damit sollte eine Einbürgerung möglich sein.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Nein',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Pass oder Passesatz:</span> Sie können derzeit auf einen gültigen Pass oder Passersatz zurückgreifen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17375: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'question',
                content:
                  '<span>Straftaten:</span> Wichtig ist, dass Sie sich nur in geringem Maße in Deutschland strafbar gemacht haben.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17347: [
                      {
                        value: 'Einbürgerung',
                        extra: null,
                      },
                    ],
                  },
                },
              },
            ],
          },
          condition: null,
        },
        {
          variationId: 2,
          content: {
            priority: ['exclamation', 'check', 'question', 'cross'],
            content: [
              {
                type: 'exclamation',
                content:
                  '<span>Aufenthalt in Deutschland:</span> Es sieht aus als würden Sie nicht die benötigten fünf Jahre Aufenthalt in Deutschland erfüllen.<br>Mögliche Ausnahmen können sein:<ol><li style="margin-top:16px;"><strong>Deutscher Ehepartner?</strong> Lesen Sie hier die Voraussetzungen der Einbürgerung nach.</li><li style="margin-top:16px;"><strong>Seit 3 Jahren in Deutschland?</strong> Sie sind besonders gut integriert und können Deutsch auf einem C1-Niveau? Dann lesen Sie hier die Voraussetzungen:</li><li style="margin-top:16px;">Es können in besonderen Ausnahmefällen auch weitere Ausnahmen greifen.</li></ol>',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17348: [
                      {
                        value: '2021>>>OR>>>2022>>>OR>>>2023',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Duldung:</span> Achtung: Wahrscheinlich hatten Sie eine Duldung vor diesem Aufenthaltstitel. Man müsste sich Ihre Aufenthaltszeiten genauer ansehen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17358: [
                      {
                        value: '§ 19d>>>OR>>>§ 25a>>>OR>>>§ 25b',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Fiktionsbescheinigung:</span> Sie haben derzeit eine Fiktionsbescheinigung. Das ist kein Problem. Sie sollten allerdings Druck auf die Ausländerbehörde aufbauen. Mit einer Fiktionsbescheinigung können Sie nicht eingebürgert werden. Sie sollten den dafür vorhergesehenen Aufenthaltstitel vorweisen können.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17356: [
                      {
                        value: 'Fiktionsbescheinigung',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Sprachkenntnisse:</span> Sie haben ein ausreichendes Sprachzertifikat.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17369: [
                      {
                        value: 'B1>>>OR>>>B2>>>OR>>>C1>>>OR>>>C2',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Ausbildung:</span> Ihre Ausbildung in Deutschland ist hoch genug für den notwendigen Sprachnachweis.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17368: [
                      {
                        value:
                          '9.Klasse Abschluss>>>OR>>>10.Klasse Abschluss>>>OR>>>Abitur oder Fachabitur>>>OR>>>Ausbildung>>>OR>>>Studium',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Ausbildung:</span> Es ist fraglich, ob Sie ausreichende Deutschkenntnisse besitzen. Fehlen die entsprechenden Sprachnachweise bestehen zwei Möglichkeiten:<ol><li style="margin-top:16px;">Es greifen Ausnahmen. Gängige Ausnahmen finden Sie hier. Zu den Ausnahmen können wir Sie beraten.</li><li style="margin-top:16px;">Sie können den Sprachnachweis nachholen.</li></ol>',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17368: [
                      {
                        value:
                          '>>>NOT>>>9.Klasse Abschluss>>>NOT>>>10.Klasse Abschluss>>>NOT>>>Abitur oder Fachabitur>>>NOT>>>Ausbildung>>>NOT>>>Studium',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              q17369: '>>>NOT>>>B1>>>NOT>>>B2>>>NOT>>>C1>>>NOT>>>C2',
                            },
                            {
                              q17370: '>>>NOT>>>Ja',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Einbürgerungstest:</span> Sie können den Einbürgerungstest vorweisen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17370: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sie beziehen derzeit kein Bürgergeld. Damit sollte eine Einbürgerung möglich sein.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Nein',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sie beziehen derzeit Bürgergeld. Damit ist eine Einbürgerung sehr schwierig. Mögliche Ausnahmen können Sie hier nachlesen:',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'question',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sollten Sie derzeit Bürgergeld beziehen wäre eine Einbürgerung sehr schwierig. Mögliche Ausnahmen können Sie hier nachlesen:',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Keine Angabe',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Pass oder Passesatz:</span> Sie können derzeit auf einen gültigen Pass oder Passersatz zurückgreifen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17375: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'question',
                content:
                  '<span>Straftaten:</span> Wichtig ist, dass Sie sich nur in geringem Maße in Deutschland strafbar gemacht haben.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17347: [
                      {
                        value: 'Einbürgerung',
                        extra: null,
                      },
                    ],
                  },
                },
              },
            ],
          },
          condition: null,
        },
        {
          variationId: 3,
          content: {
            priority: ['cross', 'exclamation', 'check', 'question'],
            content: [
              {
                type: 'exclamation',
                content:
                  '<span>Aufenthalt in Deutschland:</span> Es sieht aus als würden Sie nicht die benötigten fünf Jahre Aufenthalt in Deutschland erfüllen.<br>Mögliche Ausnahmen können sein:<ol><li style="margin-top:16px;"><strong>Deutscher Ehepartner?</strong> Lesen Sie hier die Voraussetzungen der Einbürgerung nach.</li><li style="margin-top:16px;"><strong>Seit 3 Jahren in Deutschland?</strong> Sie sind besonders gut integriert und können Deutsch auf einem C1-Niveau? Dann lesen Sie hier die Voraussetzungen:</li><li style="margin-top:16px;">Es können in besonderen Ausnahmefällen auch weitere Ausnahmen greifen.</li></ol>',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17348: [
                      {
                        value: '2021>>>OR>>>2022>>>OR>>>2023',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Duldung:</span> Achtung: Wahrscheinlich hatten Sie eine Duldung vor diesem Aufenthaltstitel. Man müsste sich Ihre Aufenthaltszeiten genauer ansehen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17358: [
                      {
                        value: '§ 19d>>>OR>>>§ 25a>>>OR>>>§ 25b',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Fiktionsbescheinigung:</span> Sie haben derzeit eine Fiktionsbescheinigung. Das ist kein Problem. Sie sollten allerdings Druck auf die Ausländerbehörde aufbauen. Mit einer Fiktionsbescheinigung können Sie nicht eingebürgert werden. Sie sollten den dafür vorhergesehenen Aufenthaltstitel vorweisen können.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17356: [
                      {
                        value: 'Fiktionsbescheinigung',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Sprachkenntnisse:</span> Sie haben ein ausreichendes Sprachzertifikat.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17369: [
                      {
                        value: 'B1>>>OR>>>B2>>>OR>>>C1>>>OR>>>C2',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Ausbildung:</span> Ihre Ausbildung in Deutschland ist hoch genug für den notwendigen Sprachnachweis.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17368: [
                      {
                        value:
                          '9.Klasse Abschluss>>>OR>>>10.Klasse Abschluss>>>OR>>>Abitur oder Fachabitur>>>OR>>>Ausbildung>>>OR>>>Studium',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Ausbildung:</span> Es ist fraglich, ob Sie ausreichende Deutschkenntnisse besitzen. Fehlen die entsprechenden Sprachnachweise bestehen zwei Möglichkeiten:<ol><li style="margin-top:16px;">Es greifen Ausnahmen. Gängige Ausnahmen finden Sie hier. Zu den Ausnahmen können wir Sie beraten.</li><li style="margin-top:16px;">Sie können den Sprachnachweis nachholen.</li></ol>',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17368: [
                      {
                        value:
                          '>>>NOT>>>9.Klasse Abschluss>>>NOT>>>10.Klasse Abschluss>>>NOT>>>Abitur oder Fachabitur>>>NOT>>>Ausbildung>>>NOT>>>Studium',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              q17369: '>>>NOT>>>B1>>>NOT>>>B2>>>NOT>>>C1>>>NOT>>>C2',
                            },
                            {
                              q17370: '>>>NOT>>>Ja',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content: '<span>Einbürgerungstest:</span> Sie können den Einbürgerungstest vorweisen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17370: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sie beziehen derzeit kein Bürgergeld. Damit sollte eine Einbürgerung möglich sein.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Nein',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'exclamation',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sie beziehen derzeit Bürgergeld. Damit ist eine Einbürgerung sehr schwierig. Mögliche Ausnahmen können Sie hier nachlesen:',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'question',
                content:
                  '<span>Gesicherter Lebensunerhalt:</span> Sollten Sie derzeit Bürgergeld beziehen wäre eine Einbürgerung sehr schwierig. Mögliche Ausnahmen können Sie hier nachlesen:',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q18261: [
                      {
                        value: 'Keine Angabe',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span>Pass oder Passesatz:</span> Sie können derzeit auf einen gültigen Pass oder Passersatz zurückgreifen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17375: [
                      {
                        value: 'Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'question',
                content:
                  '<span>Straftaten:</span> Wichtig ist, dass Sie sich nur in geringem Maße in Deutschland strafbar gemacht haben.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17347: [
                      {
                        value: 'Einbürgerung',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'cross',
                content:
                  '<span>Aufenthaltstitel:</span> Aufenthaltstitel reicht nicht für die Einbürgerung aus. Damit Sie den Einbürgerungsprozess starten können, sollten Sie den Aufenthaltstitel zunächst wechseln. Mit folgenden Aufenthaltstitel ist eine Einbürgerung nicht möglich: : §§ 16a, 16b, 16d, 16e, 16f, 17, 18d, 18f, 19, 19b, 19e, 20, 22, 23 Absatz 1, den §§ 23a, 24, 25 Absatz 3 bis 5 und § 104c AufenthG.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    q17347: [
                      {
                        value: 'Einbürgerung',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              q17358:
                                '§ 16a>>>OR>>>§ 16b>>>OR>>>§ 16d>>>OR>>>§ 16e>>>OR>>>§ 16f>>>OR>>>§ 17>>>OR>>>§ 18f>>>OR>>>§ 19>>>OR>>>§ 19b>>>OR>>>§ 19e>>>OR>>>§ 20>>>OR>>>§ 22>>>OR>>>§ 23a>>>OR>>>§ 24>>>OR>>>§ 25 Abs. 3>>>OR>>>§ 25 Abs. 4>>>OR>>>§ 25 Abs. 5>>>OR>>>§ 104c',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          condition: null,
        },
      ],
    },
  },
  question: [
    {
      content: {
        head: '',
        body: '@@@HowToGoNext@@@',
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Warum soll ich SOS Verkehrsrecht mit dem Einspruch beauftragen?",
        body: "<p class='question__paragraph'>SOS Verkehrsrecht hat bereits mehr als 150.000 Mandanten bei der Verteidigung gegen die Bußgeldbehörde vertreten. Es handelt sich hier um <b class='question__bold'>eine der größten und erfolgreichsten Verkehrsrechtskanzleien Deutschlands.</b></p><p class='question__paragraph'>Als Laie ist es leider fast unmöglich, bei der Behörde erfolgreich Einspruch einzulegen, da diese regelmäßig die Einsicht auf Akteneinsicht verwehrt. Und ohne eine fachgerechte Prüfung der Messprotokolle, Verfahrensverzeichnisse etc. lassen sich die Fehler der Behörde nicht nachweisen. Zudem belasten Sie sich eventuell aus Versehen selbst, wenn Sie unerfahren im Rahmen des Verfahrens Stellung zu gewissen Sachverhalten nehmen müssen.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: '',
        body: '@@@AdvantageList@@@',
      },
      props: {
        advantageList: {
          head: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
        },
      },
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: null,
          lessThan: 768,
        },
        form: null,
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: "<p class='question__paragraph'>Unabhängig davon, ob sie mit einem mobilen oder einem stationären Gerät geblitzt wurden, gibt es zahlreiche Angriffspunkte in einem Bußgeldverfahren.</p><p class='question__paragraph'><b class='question__bold'>Stationäre Geräte</b> sind z.B. regelmäßig falsch gewartet. Dies würde die Messung sofort ungültig machen. Selbst neueste Geräte sind hiervon betroffen (s. <a class='question__link' href='https://www.tz.de/auto/blitzer-posse-sind-31000-bussgeldbescheide-futsch-zr-8475390.html' target='_blank'>31.000 Bußgeldbescheide ungültig</a>).</p><p class='question__paragraph'>Bei <b class='question__bold'>mobilen Geräten</b> sind die Anforderungen an eine verwertbare Messung noch höher: Häufig werden Fehler bei der Aufstellung der Messgeräte gemacht, der Messbeamte ist nicht ausreichend geschult (wir fordern immer den Schulungsnachweis an) oder andere Fahrzeuge machen die Messung ungültig. Lesen Sie hier mehr über Fehler bei der Messung: <a class='question__link' href='https://www.verkehrsanwaelte.de/news/details/blitzer-falsch-aufgestellt-freispruch-trotz-geschwindigkeitsueberschreitung/' target='_blank'>Blitzer falsch aufgestellt - Freispruch</a>.</p><p class='question__paragraph'>Statistisch gesehen sind laut einer unabhängigen Studie <b class='question__bold'>mehr als 56% der Bußgeldbescheide fehlerhaft</b>. Wer sich also wehrt, kann nicht nur ein drohendes Fahrverbot, sondern auch Bußgeld und Punkte in Flensburg verhindern.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          accusation: [
            {
              value: 'Geschwindigkeitsverstoß',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: "<p class='question__paragraph'>Es gibt sehr viele Fehlerquellen, die den Tatvorwurf entkräften. So prüfen wir <b class='question__bold'>Ampel und Messgerät auf technische Defekte und auch die Fahrbahn auf Beschädigungen</b>. Beispielsweise können Witterung oder 40-Tonner den Asphalt und somit die Induktionsschleifen beschädigen, wodurch die Messungen ungenau werden.</p><p class='question__paragraph'>Statistisch gesehen sind laut einer unabhängigen Studie <b class='question__bold'>mehr als 56% der Bußgeldbescheide fehlerhaft</b>. Wer sich also wehrt, kann nicht nur ein drohendes Fahrverbot, sondern auch Bußgeld und Punkte in Flensburg verhindern.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          accusation: [
            {
              value: 'Rotlichtverstoß',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: "<p class='question__paragraph'>Es gibt sehr viele Fehlerquellen, die den Tatvorwurf entkräften. <b class='question__bold'>Dazu nutzen wir das Videomaterial</b> und stellen häufig fest, dass es schon an einer erheblichen Beobachtungsstrecke fehlt, sodass überhaupt kein Punkteverstoß vorliegen kann. Auch kommt es, aufgrund unterschiedlicher Methoden zur Berechnung, zu <b class='question__bold'>fehlerhaften Auslegungen der Abstandstoleranzen</b>.</p><p class='question__paragraph'>Statistisch gesehen sind laut einer unabhängigen Studie <b class='question__bold'>mehr als 56% der Bußgeldbescheide fehlerhaft</b>. Wer sich also wehrt, kann nicht nur ein drohendes Fahrverbot, sondern auch Bußgeld und Punkte in Flensburg verhindern.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          accusation: [
            {
              value: 'Abstandsverstoß',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: "<p class='question__paragraph'>Es gibt sehr viele Fehlerquellen, die den Tatvorwurf entkräften. <b class='question__bold'>So prüfen wir Akte und Bilder auf Fehlerquellen</b>, wie z.B. eine mögliche Verwechslung von Handys mit zulässigen Gegenständen, wie E-Zigaretten mit Display. Es muss zweifelsfrei ein Handy zu erkennen sein, welches sich zum Zeitpunkt der Bilderstellung in Benutzung befand.</p><p class='question__paragraph'>Statistisch gesehen sind laut einer unabhängigen Studie <b class='question__bold'>mehr als 56% der Bußgeldbescheide fehlerhaft</b>. Wer sich also wehrt, kann nicht nur ein drohendes Fahrverbot, sondern auch Bußgeld und Punkte in Flensburg verhindern.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          accusation: [
            {
              value: 'Handyverstoß',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Warum soll ich SOS Verkehrsrecht mit dem Einspruch beauftragen?",
        body: "<p class='question__paragraph'>SOS Verkehrsrecht hat bereits mehr als 150.000 Mandanten bei der Verteidigung gegen die Bußgeldbehörde vertreten. Es handelt sich hier um <b class='question__bold'>eine der größten und erfolgreichsten Verkehrsrechtskanzleien Deutschlands.</b></p><p class='question__paragraph'>Als Laie ist es leider fast unmöglich, bei der Behörde erfolgreich Einspruch einzulegen, da diese regelmäßig die Einsicht auf Akteneinsicht verwehrt. Und ohne eine fachgerechte Prüfung der Messprotokolle, Verfahrensverzeichnisse etc. lassen sich die Fehler der Behörde nicht nachweisen. Zudem belasten Sie sich eventuell aus Versehen selbst, wenn Sie unerfahren im Rahmen des Verfahrens Stellung zu gewissen Sachverhalten nehmen müssen.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: '',
        body: '@@@Review@@@',
      },
      props: null,
      condition: null,
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Was kostet die Beauftragung von SOS Verkehrsrecht?",
        body: "<p class='question__paragraph'>Im besten Fall entstehen Ihnen dadurch gar keine zusätzlichen Kosten, denn wenn Sie rechtsschutzversichert sind, rechnen wir unser Honorar direkt mit Ihrer Rechtsschutzversicherung ab. Ihnen entstehen dann keine zusätzlichen Kosten.</p><p class='question__paragraph'>Sollte die Rechtsschutzversicherung unerwartet keine Deckungszusage erteilen, halten wir zunächst mit Ihnen Rücksprache, ob wir für Sie als Selbstzahler tätig werden sollen oder nicht. So entsteht Ihnen kein Risiko!</p><p class='question__paragraph'>Wir rechnen derzeit u.a. folgenden Versicherungen ab:</p>@@@LogoCloud@@@<p><b class='question__bold'>Ihre Versicherung fehlt?</b> Kein Problem - wir nehmen sofort nach Vollmachtserteilung Kontakt mit Ihrer Versicherung auf und kümmern uns um alles weitere.</p><p class='question__paragraph'>Sollten sie keine Rechtsschutzversicherung haben, gibt es zwei Möglichkeiten:</p><ol class='question__list'><li class='question__list-item'>Wir vertreten Sie als <b class='question__bold'>Privatzahler</b> für einen günstigen Pauschalpreis i.H.v. 500,- Euro inkl. MwSt. Aufgrund unserer langjährigen Erfahrung und hohen Spezialisierung sind wir in der Lage diesen günstigen Preis anzubieten. In dem Preis sind alle Kosten für das außergerichtliche Verfahren abgegolten. Sollte es zu einem Gerichtstermin kommen den wir für sie wahrnehmen sollen, fällt eine weitere Gebühr an. Hierüber informieren wir Sie rechtzeitig und helfen Ihnen bei der Entscheidung.</li><li class='question__list-item'>Sie schließen eine <b class='question__bold'>rückwirkende Rechtsschutzversicherung</b> ab. Dies ist erst seit einigen Jahren möglich und bietet Ihnen den vollen Versicherungsschutz - auch für Fälle die bereits eingetreten sind. Eine Möglichkeit in diese Richtung bietet die KS/AUXILIA mit dem Verkehrs-Rechtsschutz flex sofort. Wenn Sie mehr über diese Möglichkeit erfahren möchten bzw. <b class='question__bold'>einfach und schnell diese Versicherung gleich abschließen</b> möchten, <a class='question__link' href='https://www.ks-auxilia.de/beitrags-rechner-rightmart' target='_blank'>klicken Sie hier</a>. Erteilen Sie uns die Vollmacht in diesem Fall erst nachdem Sie den rückwirkenden Rechtsschutz abgeschlossen haben. Sonst könnte die Versicherung die Kostenübernahme verweigern.</li></ol>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          legal_insurance: [
            {
              value: '>>>NOT>>>Nein',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Was kostet die Beauftragung von SOS Verkehrsrecht?",
        body: "<p class='question__paragraph'>Sollten sie keine Rechtsschutzversicherung haben, gibt es zwei Möglichkeiten:</p><ol class='question__list'><li class='question__list-item'>Wir vertreten Sie als <b class='question__bold'>Privatzahler</b> für einen günstigen Pauschalpreis i.H.v. 500,- Euro inkl. MwSt. Aufgrund unserer langjährigen Erfahrung und hohen Spezialisierung sind wir in der Lage diesen günstigen Preis anzubieten. In dem Preis sind alle Kosten für das außergerichtliche Verfahren abgegolten. Sollte es zu einem Gerichtstermin kommen den wir für sie wahrnehmen sollen, fällt eine weitere Gebühr an. Hierüber informieren wir Sie rechtzeitig und helfen Ihnen bei der Entscheidung.</li><li class='question__list-item'>Sie schließen eine <b class='question__bold'>rückwirkende Rechtsschutzversicherung</b> ab. Dies ist erst seit einigen Jahren möglich und bietet Ihnen den vollen Versicherungsschutz - auch für Fälle die bereits eingetreten sind. Eine Möglichkeit in diese Richtung bietet die KS/AUXILIA mit dem Verkehrs-Rechtsschutz flex sofort. Wenn Sie mehr über diese Möglichkeit erfahren möchten bzw. <b class='question__bold'>einfach und schnell diese Versicherung gleich abschließen</b> möchten, <a class='question__link' href='https://www.ks-auxilia.de/beitrags-rechner-rightmart' target='_blank'>klicken Sie hier</a>. Erteilen Sie uns die Vollmacht in diesem Fall erst nachdem Sie den rückwirkenden Rechtsschutz abgeschlossen haben. Sonst könnte die Versicherung die Kostenübernahme verweigern.</li></ol><p class='question__paragraph'><b class='question__bold'>Wenn Sie rechtsschutzversichert sind</b>, rechnen wir unser Honorar direkt mit Ihrer Rechtsschutzversicherung ab. Ihnen entstehen dann keine zusätzlichen Kosten.</p>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: null,
        form: {
          legal_insurance: [
            {
              value: 'Nein',
              extra: null,
            },
          ],
        },
      },
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie geht es jetzt weiter? Was sind die nächsten Schritte?",
        body: "<ol class='question__list'><li class='question__list-item'>Sie erteilen uns die Vollmacht. Dies geht ganz einfach online und dauert nur 2 Minuten.</li><li class='question__list-item'>Wir fordern Ihre Akte an und beginnen mit der Arbeit an Ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.</li></ol>",
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: "<b class='question__bold'>FAQ:</b> Weitere häufig gestellte Fragen",
        body: '@@@Accordion@@@',
      },
      props: {
        accordion: {
          blocks: [
            {
              title: 'Kann ein Einspruch meine Lage verschlechtern?',
              content:
                "<p class='question__paragraph'>Nein, die Strafe kann sich im laufenden Verfahren durch einen Einspruch nicht verschlechtern, sondern immer nur verbessern oder gänzlich entfallen.</p>",
            },
            {
              title: 'Wie kann ich ein dohendes Fahrverbot abwenden?',
              content:
                "<p class='question__paragraph'>Unser primäres Ziel ist es, die Einstellung Ihres gesamten Bußgeldverfahrens zu erwirken, indem wir der Behörde Fehler in der Messung und/oder Bearbeitung Ihres Falles nachweisen.</p><p class='question__paragraph'>Darüber hinaus haben wir unabhängig davon immer die Möglichkeit, einen Fahrverbotsvermeidungsantrag zu stellen. In diesem Fall entscheidet die Behörde bzw. das Gericht darüber, ob das Fahrverbot gegen eine erhöhte Bußgeldzahlung entfällt. Damit dies gelingt, helfen uns unsere jahrelange Erfahrung sowie gute Kontakte bei den Behörden und Gerichten.</p>",
              condition: {
                mode: 'some',
                accusation: [
                  {
                    value: 'Bingo',
                    extra: {
                      mode: 'every',
                      condition: [
                        {
                          q17347: '>40>>>OR>>>31-40',
                        },
                        {
                          q17375: 'Innerorts',
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              title: 'Sonstige Rückfragen / mir wurden nicht alle Fragen beantwortet',
              content:
                "Bitte zögern Sie nicht uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.",
              condition: {
                screenMoreThan: 768,
              },
            },
          ],
        },
      },
      condition: null,
    },
  ],
  sidebar: [
    {
      content: {
        head: '',
        body: '@@@OrderedList@@@',
      },
      props: {
        orderedList: {
          head: 'Jetzt Vollmacht erteilen',
          list: [
            'Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.',
            'Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.',
          ],
        },
      },
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: '',
        body: '@@@Logos@@@',
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: '',
        body: '@@@ContactUs@@@',
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
  ],
  footer: [
    {
      content: {
        head: '',
        body: '@@@AdvantageList@@@',
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
    {
      content: {
        head: '',
        body: '@@@ContactUs@@@',
      },
      props: null,
      condition: {
        forceResult: 'none',
        mode: 'some',
        screen: {
          moreThan: 768,
          lessThan: null,
        },
        form: null,
      },
    },
  ],
};

export default prio;
