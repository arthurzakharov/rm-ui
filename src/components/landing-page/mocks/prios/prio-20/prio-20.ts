import { Prio } from '../../../utils/types/prio';

const prio: Prio = {
  variation: null,
  successBox: {
    head: [
      {
        variationId: 1,
        content: {
          primary: 'Herzlichen Glückwunsch:',
          secondary: 'Ein Einspruch kann sich lohnen!',
        },
        condition: null,
      },
    ],
    body: {
      title: [
        {
          variationId: 1,
          content: 'Unsere Analyse hat ergeben, dass sich ein Einspruch in Ihrem Fall lohnen kann.',
          condition: null,
        },
      ],
      html: [],
      list: [
        {
          variationId: 1,
          content: {
            priority: ['check', 'question', 'exclamation', 'cross'],
            content: [
              {
                type: 'check',
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Geschwindigkeitsüberschreitung mit ###extra[wieviel-kmh]>>>label|lowerCaseFirstLetter### zu schnell, ###extra[wo-unterwegs]>>>lowerCaseFirstLetter###.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Geschwindigkeitsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[wieviel-kmh]': '>>>NOT>>>Unsicher',
                            },
                            {
                              'extra[wo-unterwegs]': '>>>NOT>>>Unsicher',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Geschwindigkeitsüberschreitung, ###extra[wo-unterwegs]>>>lowerCaseFirstLetter###.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Geschwindigkeitsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[wieviel-kmh]': 'Unsicher',
                            },
                            {
                              'extra[wo-unterwegs]': '>>>NOT>>>Unsicher',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Geschwindigkeitsüberschreitung, mit ###extra[wieviel-kmh]>>>label|lowerCaseFirstLetter### zu schnell.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Geschwindigkeitsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[wieviel-kmh]': '>>>NOT>>>Unsicher',
                            },
                            {
                              'extra[wo-unterwegs]': 'Unsicher',
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
                content: '<span class="highlighted">Tatvorwurf:</span> Geschwindigkeitsüberschreitung.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Geschwindigkeitsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[wieviel-kmh]': 'Unsicher',
                            },
                            {
                              'extra[wo-unterwegs]': 'Unsicher',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Rotlichtverstoß mit Ampel ###extra[ampel]### rot.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Rotlichtverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[ampel]': '1 Sekunde oder länger',
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
                content: '<span class="highlighted">Tatvorwurf:</span> Rotlichtverstoß.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Rotlichtverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[ampel]': '>>>NOT>>>1 Sekunde oder länger',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Abstand, bei Geschwindigkeit von ###extra[schnell-unterwegs]>>>label|lowerCaseFirstLetter### mit ###extra[abstand]>>>label###, nicht eingehalten.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Abstandsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[schnell-unterwegs]': '>>>NOT>>>Unsicher',
                            },
                            {
                              'extra[abstand]': '>>>NOT>>>Unsicher',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Abstand mit ###extra[abstand]>>>label### nicht eingehalten.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Abstandsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[schnell-unterwegs]': 'Unsicher',
                            },
                            {
                              'extra[abstand]': '>>>NOT>>>Unsicher',
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
                content:
                  '<span class="highlighted">Tatvorwurf:</span> Abstand, bei Geschwindigkeit von ###extra[schnell-unterwegs]>>>label|lowerCaseFirstLetter###, nicht eingehalten.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Abstandsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[schnell-unterwegs]': '>>>NOT>>>Unsicher',
                            },
                            {
                              'extra[abstand]': 'Unsicher',
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
                content: '<span class="highlighted">Tatvorwurf:</span> Abstandsverstoß.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    accusation: [
                      {
                        value: 'Abstandsverstoß',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              'extra[schnell-unterwegs]': 'Unsicher',
                            },
                            {
                              'extra[abstand]': 'Unsicher',
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
                content: '<span class="highlighted">Tatvorwurf:</span> Handyverstoß.',
                subContent: [],
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
                type: 'check',
                content:
                  '<span class="highlighted">Punkte in Flensburg:</span> ###extra[punkte-flensburg]>>>label### Punkte vorhanden. Aber Vorsicht! Bereits ab dem ersten Verstoß sind Sie vorgemerkt zur Überprüfung der Fahreignung. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[punkte-flensburg]': [
                      {
                        value: 'Keine',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span class="highlighted">Punkte in Flensburg:</span> Bereits ###extra[punkte-flensburg]>>>label### vorhanden. Also Vorsicht! Bereits ab dem ersten Verstoß sind Sie vorgemerkt zur Überprüfung der Fahreignung. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[punkte-flensburg]': [
                      {
                        value: '1 - 3 (Vormerkung)',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span class="highlighted">Punkte in Flensburg:</span> Bereits ###extra[punkte-flensburg]>>>label### vorhanden. Also Vorsicht! Sie sind zur Überprüfung der Fahreignung vorgemerkt. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[punkte-flensburg]': [
                      {
                        value: '4 - 5 (Ermahnung)>>>OR>>>6 - 7 (Verwarnung)>>>OR>>>8 (Entzug)',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span class="highlighted">Punkte in Flensburg:</span> ###extra[punkte-flensburg]>>>label###. Vorsicht! Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich. Unter Umständen sind Sie zur Überprüfung der Fahreignung vorgemerkt.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[punkte-flensburg]': [
                      {
                        value: 'Unsicher',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span class="highlighted">Auf Führerschein angewiesen:</span> Sie haben angegeben, dass Sie aus beruflichen Gründen auf Ihren Führerschein angewiesen sind.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[fuehrerschein-angewiesen]': [
                      {
                        value: 'Ja, aus beruflichen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Geschwindigkeitsverstoß',
                            },
                            {
                              'extra[wieviel-kmh]': '>40>>>OR>>>31-40',
                            },
                            {
                              'extra[wo-unterwegs]': 'Innerorts',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus beruflichen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Geschwindigkeitsverstoß',
                            },
                            {
                              'extra[wieviel-kmh]': '>40',
                            },
                            {
                              'extra[wo-unterwegs]': 'Außerorts',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus beruflichen Gründen',
                        extra: {
                          mode: 'some',
                          condition: [
                            {
                              'extra[ampel]': '1 Sekunde oder länger',
                            },
                            {
                              'extra[verkehrsteilnehmer]': 'Ja',
                            },
                            {
                              'extra[beschaedigung]': 'Ja',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus beruflichen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Abstandsverstoß',
                            },
                            {
                              'extra[schnell-unterwegs]':
                                'Zwischen 101 Km/h und 130 Km/h>>>OR>>>Schneller als 131 Km/h',
                            },
                            {
                              'extra[abstand]':
                                '3/10 des Tachowertes>>>OR>>>2/10 des Tachowertes>>>OR>>>1/10 des Tachowertes',
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
                content:
                  '<span class="highlighted">Auf Führerschein angewiesen:</span> Sie haben angegeben, dass Sie aus sonstigen Gründen auf Ihren Führerschein angewiesen sind.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    'extra[fuehrerschein-angewiesen]': [
                      {
                        value: 'Ja, aus sonstigen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Geschwindigkeitsverstoß',
                            },
                            {
                              'extra[wieviel-kmh]': '>40>>>OR>>>31-40',
                            },
                            {
                              'extra[wo-unterwegs]': 'Innerorts',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus sonstigen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Geschwindigkeitsverstoß',
                            },
                            {
                              'extra[wieviel-kmh]': '>40',
                            },
                            {
                              'extra[wo-unterwegs]': 'Außerorts',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus sonstigen Gründen',
                        extra: {
                          mode: 'some',
                          condition: [
                            {
                              'extra[ampel]': '1 Sekunde oder länger',
                            },
                            {
                              'extra[verkehrsteilnehmer]': 'Ja',
                            },
                            {
                              'extra[beschaedigung]': 'Ja',
                            },
                          ],
                        },
                      },
                      {
                        value: 'Ja, aus sonstigen Gründen',
                        extra: {
                          mode: 'every',
                          condition: [
                            {
                              accusation: 'Abstandsverstoß',
                            },
                            {
                              'extra[schnell-unterwegs]':
                                'Zwischen 101 Km/h und 130 Km/h>>>OR>>>Schneller als 131 Km/h',
                            },
                            {
                              'extra[abstand]':
                                '3/10 des Tachowertes>>>OR>>>2/10 des Tachowertes>>>OR>>>1/10 des Tachowertes',
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
                content:
                  '<span class="highlighted">Rechtsschutzversicherung:</span> Sie haben angegeben, dass Sie rechtsschutzversichert sind.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    legal_insurance: [
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
                  '<span class="highlighted">Rechtsschutzversicherung:</span> Wenn Sie nicht rechtsschutzversichert sind, können Sie über den Abschluss einer rückwirkenden Rechtsschutzversicherung den vollen Versicherungsschutz, auch für Fälle die bereits eingetreten sind, genießen.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    legal_insurance: [
                      {
                        value: '>>>NOT>>>Ja',
                        extra: null,
                      },
                    ],
                  },
                },
              },
              {
                type: 'check',
                content:
                  '<span class="highlighted">Postleitzahl:</span> ###zip###. Sie wohnen in einem Postleitzahlgebiet, in dem bereits mehr als 10.000 Bußgeldbescheide für ungültig erklärt wurden.',
                subContent: [],
                condition: {
                  forceResult: 'none',
                  mode: 'some',
                  screen: null,
                  form: {
                    zip: [
                      {
                        value: '>>>FROM>>>00001>>>TO>>>99999',
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
          moreThan: null,
          lessThan: 768,
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
          moreThan: null,
          lessThan: 768,
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
          title: 'Vorteile beim Einspruch mit SOS Verkehrsrecht',
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
        body: "<p class='question__paragraph'>Im besten Fall entstehen Ihnen dadurch gar keine zusätzlichen Kosten, denn wenn Sie rechtsschutzversichert sind, rechnen wir unser Honorar direkt mit Ihrer Rechtsschutzversicherung ab.</p><p class='question__paragraph'>Sollte die Rechtsschutzversicherung unerwartet keine Deckungszusage erteilen, halten wir zunächst mit Ihnen Rücksprache, ob wir für Sie als Selbstzahler tätig werden sollen oder nicht. So entsteht Ihnen kein Risiko!</p><p class='question__paragraph'>Sollten sie keine Rechtsschutzversicherung haben, vertreten wir Sie als <b class='question__bold'>Privatzahler</b> für einen günstigen Pauschalpreis i.H.v. 500,- Euro inkl. MwSt. Aufgrund unserer langjährigen Erfahrung und hohen Spezialisierung sind wir in der Lage diesen günstigen Preis anzubieten. In dem Preis sind alle Kosten für das außergerichtliche Verfahren abgegolten. Sollte es zu einem Gerichtstermin kommen den wir für sie wahrnehmen sollen, fällt eine weitere Gebühr an. Hierüber informieren wir Sie rechtzeitig und helfen Ihnen bei der Entscheidung.</p>",
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
        body: "<p class='question__paragraph'>Sollten sie keine Rechtsschutzversicherung haben, gibt es zwei Möglichkeiten:</p><ol class='question__list'><li class='question__list-item'>Wir vertreten Sie als <b class='question__bold'>Privatzahler</b> für einen günstigen Pauschalpreis i.H.v. 500,- Euro inkl. MwSt. Aufgrund unserer langjährigen Erfahrung und hohen Spezialisierung sind wir in der Lage diesen günstigen Preis anzubieten. In dem Preis sind alle Kosten für das außergerichtliche Verfahren abgegolten. Sollte es zu einem Gerichtstermin kommen den wir für sie wahrnehmen sollen, fällt eine weitere Gebühr an. Hierüber informieren wir Sie rechtzeitig und helfen Ihnen bei der Entscheidung.</li><li class='question__list-item'>Sie schließen eine <b class='question__bold'>rückwirkende Rechtsschutzversicherung</b> ab. Dies ist erst seit einigen Jahren möglich und bietet Ihnen den vollen Versicherungsschutz - auch für Fälle die bereits eingetreten sind.</li></ol><p class='question__paragraph'><b class='question__bold'>Wenn Sie rechtsschutzversichert sind</b>, rechnen wir unser Honorar direkt mit Ihrer Rechtsschutzversicherung ab. Ihnen entstehen dann im besten Fall keine zusätzlichen Kosten.</p>",
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
        body: "<ol class='question__list'><li class='question__list-item'>Sie erteilen uns die Vollmacht. Dies geht ganz einfach online und dauert nur 2 Minuten.</li><li class='question__list-item'>Wir fordern Ihre Akte an und beginnen mit der Arbeit an Ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.</li></ol>@@@Button@@@",
      },
      props: {
        button: {
          text: 'Vollmacht ansehen',
          onClick: 'clickLongReadCta',
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
        head: "<b class='question__bold'>FAQ:</b> Weitere häufig gestellte Fragen",
        body: '@@@Accordion@@@',
      },
      props: {
        accordion: {
          title: '',
          blocks: [
            {
              title: 'Kann ein Einspruch meine Lage verschlechtern?',
              content:
                "<p class='question__paragraph'>Nein, die Strafe kann sich im laufenden Verfahren durch einen Einspruch nicht verschlechtern, sondern immer nur verbessern oder gänzlich entfallen.</p>",
              condition: null,
            },
            {
              title: 'Wie kann ich ein dohendes Fahrverbot abwenden?',
              content:
                "<p class='question__paragraph'>Unser primäres Ziel ist es, die Einstellung Ihres gesamten Bußgeldverfahrens zu erwirken, indem wir der Behörde Fehler in der Messung und/oder Bearbeitung Ihres Falles nachweisen.</p><p class='question__paragraph'>Darüber hinaus haben wir unabhängig davon immer die Möglichkeit, einen Fahrverbotsvermeidungsantrag zu stellen. In diesem Fall entscheidet die Behörde bzw. das Gericht darüber, ob das Fahrverbot gegen eine erhöhte Bußgeldzahlung entfällt. Damit dies gelingt, helfen uns unsere jahrelange Erfahrung sowie gute Kontakte bei den Behörden und Gerichten.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>40>>>OR>>>31-40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Innerorts',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Außerorts',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Unsicher',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '26-30',
                          },
                          {
                            'extra[wo-unterwegs]': 'Innerorts',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '26-30>>>OR>>>31-40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Außerorts',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '26-30>>>OR>>>31-40>>>OR>>>>40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Unsicher',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'some',
                        condition: [
                          {
                            'extra[ampel]': '1 Sekunde oder länger',
                          },
                          {
                            'extra[verkehrsteilnehmer]': 'Ja',
                          },
                          {
                            'extra[beschaedigung]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': 'Zwischen 101 Km/h und 130 Km/h>>>OR>>>Schneller als 131 Km/h',
                          },
                          {
                            'extra[abstand]':
                              '3/10 des Tachowertes>>>OR>>>2/10 des Tachowertes>>>OR>>>1/10 des Tachowertes',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich noch keinen Punkt habe?',
              content:
                "<p class='question__paragraph'>Diese Entscheidung können wir Ihnen nicht abnehmen.</p><p class='question__paragraph'>Generell gilt: Je länger sie punktefrei fahren, desto besser. Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein. Unsere Erfahrung zeigt, dass sich ein Einspruch beim ersten Punkt besonders häufig lohnt, weil man als “Erst-Täter” bessere Chancen hat als ein Widerholungstäter. Das bedeutet für Sie: Wenn Sie warten bis sie erneut geblitzt werden, können die Chancen schlechter stehen als beim ersten Punkt.</p><p class='question__paragraph'>Bereits ab dem ersten Verstoß sind Sie zur Überprüfung der Fahreignung vorgemerkt. Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Künftige Bußgelder können vom Sachbearbeiter erhöht werden, sobald Sie der Behörde einmal negativ aufgefallen sind.</p><p class='question__paragraph'>Außerdem verlangen viele Versicherungen schon beim ersten Punkt einen Preisaufschlag von bis zu 30% auf die Prämie der KFZ-Versicherung. Mitunter verweigern sie mit dem ersten Punkt komplett den Neuabschluss.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>>>NOT>>><16',
                          },
                          {
                            'extra[punkte-flensburg]': 'Keine',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': 'Keine',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': '>>>NOT>>>Langsamer als 80 Km/h>>>OR>>>Unsicher',
                          },
                          {
                            'extra[punkte-flensburg]': 'Keine',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Handyverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': 'Keine',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich noch wenig Punkte habe?',
              content:
                "<p class='question__paragraph'>Diese Entscheidung können wir Ihnen nicht abnehmen. Generell gilt: Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein.</p><p class='question__paragraph'>Bereits ab dem ersten Verstoß sind Sie zur Überprüfung der Fahreignung vorgemerkt. Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Künftige Bußgelder können vom Sachbearbeiter erhöht werden, sobald sie der Behörde einmal negativ aufgefallen sind.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>>>NOT>>><16',
                          },
                          {
                            'extra[punkte-flensburg]': '1 - 3 (Vormerkung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '1 - 3 (Vormerkung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': '>>>NOT>>>Langsamer als 80 Km/h>>>OR>>>Unsicher',
                          },
                          {
                            'extra[punkte-flensburg]': '1 - 3 (Vormerkung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Handyverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '1 - 3 (Vormerkung)',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich erst 4 oder 5 Punkte habe?',
              content:
                "<p class='question__paragraph'>Generell gilt: Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein.</p><p class='question__paragraph'>Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet.</p><p class='question__paragraph'>Bereits vor Rechtskraft des 6. Punktes, am Tag der Begehung, entfällt die Möglichkeit zum Punkteabbau durch ein Aufbauseminar. Es lohnt sich also gegen jeden Punkt vorzugehen, um künftig höhere Kosten durch beispielsweise eine MPU oder Punktebedingt erhöhte Bußgelder zu vermeiden.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>>>NOT>>><16',
                          },
                          {
                            'extra[punkte-flensburg]': '4 - 5 (Ermahnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '4 - 5 (Ermahnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': '>>>NOT>>>Langsamer als 80 Km/h>>>OR>>>Unsicher',
                          },
                          {
                            'extra[punkte-flensburg]': '4 - 5 (Ermahnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Handyverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '4 - 5 (Ermahnung)',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich erst 6 oder 7 Punkte habe?',
              content:
                "<p class='question__paragraph'>Generell gilt: Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein. <b class='question__bold'>Ab 6 Punkte kann bereits dieser Verstoß zum Führerscheinentzug führen.</b></p><p class='question__paragraph'>Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Es lohnt sich also gegen jeden Punkt vorzugehen, um künftig höhere Kosten durch eine MPU und den Fahrerlaubnisentzug zu vermeiden.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>>>NOT>>><16',
                          },
                          {
                            'extra[punkte-flensburg]': '6 - 7 (Verwarnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '6 - 7 (Verwarnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': '>>>NOT>>>Langsamer als 80 Km/h>>>OR>>>Unsicher',
                          },
                          {
                            'extra[punkte-flensburg]': '6 - 7 (Verwarnung)',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Handyverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': '6 - 7 (Verwarnung)',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich noch keinen oder wenig Punkte habe?',
              content:
                "<p class='question__paragraph'>Diese Entscheidung können wir Ihnen nicht abnehmen. Generell gilt: Je länger sie punktefrei fahren, desto besser. Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein.</p><p class='question__paragraph'>Unsere Erfahrung zeigt, dass sich ein Einspruch beim ersten Punkt besonders häufig lohnt, weil man als “Erst-Täter” häufig bessere Chancen hat als ein Widerholungstäter. Das bedeutet für Sie: Wenn sie warten bis sie erneut geblitzt werden, können die Chancen schlechter stehen als beim ersten Punkt.</p><p class='question__paragraph'></p><p class='question__paragraph'>Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Es lohnt sich also gegen jeden Punkt vorzugehen, um künftig höhere Kosten durch eine MPU und den Fahrerlaubnisentzug zu vermeiden.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  accusation: [
                    {
                      value: 'Geschwindigkeitsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[wieviel-kmh]': '>>>NOT>>><16',
                          },
                          {
                            'extra[punkte-flensburg]': 'Unsicher',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Rotlichtverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': 'Unsicher',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Abstandsverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[schnell-unterwegs]': '>>>NOT>>>Langsamer als 80 Km/h',
                          },
                          {
                            'extra[punkte-flensburg]': 'Unsicher',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Handyverstoß',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            'extra[punkte-flensburg]': 'Unsicher',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Ich bin aus beruflichen oder sonstigen Gründen auf meinen Führerschein angewiesen.',
              content:
                'Wenn Sie aus beruflichen oder sonstigen Gründen auf Ihren Führerschein angewiesen sind, bemühen wir uns darum, die sogenannte “Härtefallregelung” für sie geltend zu machen. D.h. wir versuchen, ein Fahrverbot in jedem Fall abzuwenden, wenn dies durch Ihre besondere Situation begründet werden kann.',
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[fuehrerschein-angewiesen]': [
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Geschwindigkeitsverstoß',
                          },
                          {
                            'extra[wieviel-kmh]': '>40>>>OR>>>31-40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Innerorts',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Geschwindigkeitsverstoß',
                          },
                          {
                            'extra[wieviel-kmh]': '>40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Außerorts',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Geschwindigkeitsverstoß',
                          },
                          {
                            'extra[wieviel-kmh]': '26-30',
                          },
                          {
                            'extra[wo-unterwegs]': 'Innerorts',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Geschwindigkeitsverstoß',
                          },
                          {
                            'extra[wieviel-kmh]': '26-30>>>OR>>>31-40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Außerorts',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Geschwindigkeitsverstoß',
                          },
                          {
                            'extra[wieviel-kmh]': '26-30>>>OR>>>31-40>>>OR>>>>40',
                          },
                          {
                            'extra[wo-unterwegs]': 'Unsicher',
                          },
                          {
                            'extra[blitzer]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'some',
                        condition: [
                          {
                            'extra[ampel]': '1 Sekunde oder länger',
                          },
                          {
                            'extra[verkehrsteilnehmer]': 'Ja',
                          },
                          {
                            'extra[beschaedigung]': 'Ja',
                          },
                        ],
                      },
                    },
                    {
                      value: 'Ja, aus beruflichen Gründen>>>OR>>>Ja, aus sonstigen Gründen',
                      extra: {
                        mode: 'every',
                        condition: [
                          {
                            accusation: 'Abstandsverstoß',
                          },
                          {
                            'extra[schnell-unterwegs]': 'Zwischen 101 Km/h und 130 Km/h>>>OR>>>Schneller als 131 Km/h',
                          },
                          {
                            'extra[abstand]':
                              '3/10 des Tachowertes>>>OR>>>2/10 des Tachowertes>>>OR>>>1/10 des Tachowertes',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            {
              title: 'Ich befinde mich noch in der Probezeit. Was bedeutet das für mich?',
              content:
                'Wer sich noch in der Probezeit befindet, sollte unserer Erfahrung nach unbedingt Einspruch gegen den Bußgeldbescheid einlegen, um Schlimmeres wie z.B. eine Verlängerung der Probezeit oder einen Aufbauseminar zu verhindern.',
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[besitz-fuehrerschein]': [
                    {
                      value: 'Weniger als 2 Jahre',
                      extra: null,
                    },
                  ],
                },
              },
            },
            {
              title: 'Ich bin nun mal zu schnell gefahren. Kann man da wirklich etwas machen?',
              content:
                'Ja. Ein Großteil unserer Mandanten ist tatsächlich zu schnell gefahren. Dies ist aber nicht ausschlaggebend für ein aus Ihrer Sicht erfolgreiches Verfahren. Wichtig ist, dass der Nachweis ihrer Geschwindigkeitsüberschreitung zweifelsfrei erbracht werden kann. Wir sind darauf spezialisiert, genau diesen Nachweis zu verhindern.',
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
              title: 'Ich bin nun mal über Rot gefahren. Kann man da wirklich etwas machen?',
              content:
                'Ja. Ein Großteil unserer Mandanten ist tatsächlich über Rot gefahren. Dies ist aber nicht ausschlaggebend für ein aus ihrer Sicht erfolgreiches Verfahren. Wichtig ist, dass der Nachweis ihres Rotlichtverstoßes zweifelsfrei erbracht werden kann. Wir sind darauf spezialisiert, genau diesen Nachweis zu verhindern.',
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
              title: 'Ich bin nun mal zu dicht aufgefahren. Kann man da wirklich etwas machen?',
              content:
                'Ja. Ein Großteil unserer Mandanten ist tatsächlich zu dicht aufgefahren. Dies ist aber nicht ausschlaggebend für ein aus ihrer Sicht erfolgreiches Verfahren. Wichtig ist, dass der Nachweis ihres Abstandverstoßes zweifelsfrei erbracht werden kann. Wir sind darauf spezialisiert, genau diesen Nachweis zu verhindern.',
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
              title: 'Ich bin auf dem Foto zu erkennen. Bringt denn ein Einspruch überhaupt noch etwas?',
              content:
                'Das Foto ist aus juristischer Sicht erstmal irrelevant. Das sagt im Prinzip nur aus, dass Sie im Auto gesessen haben. Und das wollen wir ja auch gar nicht anzweifeln. Das was wir anzweifeln, ist die Messung selbst, dass Sie so schnell gefahren sind, wie von der Behörde behauptet. Außerdem müssen Sie immer bedenken, dass der Sachbearbeiter der Behörde, der Ihren Fall bearbeitet, Sie nicht persönlich kennt und somit nicht zwangsläufig nachvollziehen kann, ob Sie das auf dem Foto tatsächlich sind (für den Fall, dass wir das Bildmaterial in Frage stellen).',
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
              title: 'Ich bin auf dem Foto zu erkennen. Bringt denn ein Einspruch überhaupt noch etwas?',
              content:
                'Das Foto ist aus juristischer Sicht erstmal irrelevant. Das sagt im Prinzip nur aus, dass Sie im Auto gesessen haben. Und das wollen wir ja auch gar nicht anzweifeln. Das was wir anzweifeln, ist die Messung selbst. Außerdem müssen Sie immer bedenken, dass der Sachbearbeiter der Behörde, der Ihren Fall bearbeitet, Sie nicht persönlich kennt und somit nicht zwangsläufig nachvollziehen kann, ob Sie das auf dem Foto tatsächlich sind.',
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
              title: 'Ich bin auf dem Video zu erkennen. Bringt denn ein Einspruch überhaupt noch etwas?',
              content:
                'Das Video ist aus juristischer Sicht erstmal irrelevant. Das sagt im Prinzip nur aus, dass Sie im Auto gesessen haben. Und das wollen wir ja auch gar nicht anzweifeln. Das was wir anzweifeln, ist die Messung selbst. Dafür schauen wir uns u.a. das Videomaterial der Messung an. Außerdem müssen Sie immer bedenken, dass der Sachbearbeiter der Behörde, der Ihren Fall bearbeitet, Sie nicht persönlich kennt und somit nicht zwangsläufig nachvollziehen kann, ob Sie das auf dem Video tatsächlich sind.',
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
              title: 'Ich bin gefahren, aber das Fahrzeug ist nicht auf mich gemeldet. Wie verhalte ich mich richtig?',
              content:
                'Kein Problem, als Fahrer verteidigen wir Sie unabhängig davon, ob Sie der Halter des Fahrzeuges sind.',
              condition: null,
            },
            {
              title: 'Mir liegt ein Zeugenfragebogen vor. Wie verhalte ich mich richtig?',
              content:
                "<p class='question__paragraph'>Wenn Ihnen bisher nur ein Zeugenfragebogen vorliegt, prüfen Sie zuerst, ob Sie mit dem Fahrzeug gefahren sind.</p><p class='question__paragraph'>Falls Ihre Antwort “Nein” lautet, geben Sie an “Fahrzeug wurde überlassen an:” + Name und Anschrift des Fahrers.</p><p class='question__paragraph'><b class='question__bold'>Falls Ihre Antwort “Ja” lautet, empfehlen wir Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[behoerde-bescheid]': [
                    {
                      value: 'Zeugenfragebogen',
                      extra: null,
                    },
                  ],
                },
              },
            },
            {
              title: 'Mir liegt ein Anhörungsbogen vor. Wie verhalte ich mich richtig?',
              content:
                "<p class='question__paragraph'>Wenn Ihnen bereits ein Anhörungsbogen vorliegt, prüfen Sie die personenbezogenen Daten (Name, Anschrift, Geburtsdatum und Geburtsort) auf dem Schreiben. Sollten diese fehlerhaft sein, müssen Sie diese korrigieren und den Anhörungsbogen binnen 7 Tagen an die Behörde zurückschicken.</p><p class='question__paragraph'><b class='question__bold'>Wir empfehlen Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[behoerde-bescheid]': [
                    {
                      value: 'Anhörungsbogen',
                      extra: null,
                    },
                  ],
                },
              },
            },
            {
              title: 'Mir liegt ein Bußgeldbescheid vor. Wie verhalte ich mich richtig?',
              content:
                "Wenn Ihnen bereits ein Bußgeldbescheid vorliegt, ist Eile geboten. Ab dem Tag der Zustellung läuft die 14-tägige Einspruchsfrist. Um das Verfahren nicht rechtskräftig werden zu lassen, sollte daher schnellstmöglich Einspruch eingelegt werden. Bitte zögern Sie nicht, uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[behoerde-bescheid]': [
                    {
                      value: 'Bußgeldbescheid',
                      extra: null,
                    },
                  ],
                },
              },
            },
            {
              title: 'Ich habe bereits Post von der Behörde erhalten. Wie verhalte ich mich richtig?',
              content:
                "<p class='question__paragraph'><b class='question__bold' style='color:#004473'>Zeugenfragebogen</b></p><p class='question__paragraph'>Wenn Ihnen bisher nur ein Zeugenfragebogen vorliegt, prüfen Sie zuerst, ob Sie mit dem Fahrzeug gefahren sind.</p><p class='question__paragraph'>Falls Ihre Antwort “Nein” lautet, geben Sie an “Fahrzeug wurde überlassen an:” + Name und Anschrift des Fahrers.</p><p class='question__paragraph'><b class='question__bold'>Falls Ihre Antwort “Ja” lautet, empfehlen wir Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p><p class='question__paragraph'><b class='question__bold' style='color:#004473'>Anhörungsbogen</b></p><p class='question__paragraph'>Wenn Ihnen bereits ein Anhörungsbogen vorliegt, prüfen Sie die personenbezogenen Daten (Name, Anschrift, Geburtsdatum und Geburtsort) auf dem Schreiben. Sollten diese fehlerhaft sein, müssen Sie diese korrigieren und den Anhörungsbogen binnen 7 Tagen an die Behörde zurückschicken.</p><p class='question__paragraph'><b class='question__bold'>Wir empfehlen Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p><p class='question__paragraph'><b class='question__bold' style='color:#004473'>Bußgeldbescheid</b></p><p class='question__paragraph'>Wenn Ihnen bereits ein Bußgeldbescheid vorliegt, ist Eile geboten. Ab dem Tag der Zustellung läuft die 14-tägige Einspruchsfrist. Um das Verfahren nicht rechtskräftig werden zu lassen, <b class='question__bold'>sollte daher schnellstmöglich Einspruch eingelegt werden</b>. Bitte zögern Sie nicht, uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.</p>",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: null,
                form: {
                  'extra[behoerde-bescheid]': [
                    {
                      value: 'Unsicher',
                      extra: null,
                    },
                  ],
                },
              },
            },
            {
              title: 'Sonstige Rückfragen / mir wurden nicht alle Fragen beantwortet',
              content:
                "Bitte zögern Sie nicht uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.",
              condition: {
                forceResult: 'none',
                mode: 'some',
                screen: {
                  moreThan: 768,
                  lessThan: 768,
                },
                form: null,
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
          title: 'Jetzt Vollmacht erteilen',
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
        body: '@@@Button@@@',
      },
      props: {
        button: {
          fullWidth: true,
          text: 'Vollmacht ansehen',
          onClick: 'clickLongReadCta',
        },
      },
      condition: null,
    },
    {
      content: {
        head: '',
        body: '@@@Certificates@@@',
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
      condition: null,
    },
  ],
};

export default prio;
