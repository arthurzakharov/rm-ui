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
                  '<span>Tatvorwurf:</span> Geschwindigkeitsüberschreitung mit ###extra[wieviel-kmh]>>>label|lowerCaseFirstLetter### zu schnell, ###extra[wo-unterwegs]>>>lowerCaseFirstLetter###.',
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
                  '<span>Tatvorwurf:</span> Geschwindigkeitsüberschreitung, ###extra[wo-unterwegs]>>>lowerCaseFirstLetter###.',
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
                  '<span>Tatvorwurf:</span> Geschwindigkeitsüberschreitung, mit ###extra[wieviel-kmh]>>>label|lowerCaseFirstLetter### zu schnell.',
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
                content: '<span>Tatvorwurf:</span> Geschwindigkeitsüberschreitung.',
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
                content: '<span>Tatvorwurf:</span> Rotlichtverstoß mit Ampel ###extra[ampel]### rot.',
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
                content: '<span>Tatvorwurf:</span> Rotlichtverstoß.',
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
                  '<span>Tatvorwurf:</span> Abstand, bei Geschwindigkeit von ###extra[schnell-unterwegs]>>>label|lowerCaseFirstLetter### mit ###extra[abstand]>>>label###, nicht eingehalten.',
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
                content: '<span>Tatvorwurf:</span> Abstand mit ###extra[abstand]>>>label### nicht eingehalten.',
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
                  '<span>Tatvorwurf:</span> Abstand, bei Geschwindigkeit von ###extra[schnell-unterwegs]>>>label|lowerCaseFirstLetter###, nicht eingehalten.',
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
                content: '<span>Tatvorwurf:</span> Abstandsverstoß.',
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
                content: '<span>Tatvorwurf:</span> Handyverstoß.',
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
                  '<span>Punkte in Flensburg:</span> ###extra[punkte-flensburg]>>>label### Punkte vorhanden. Aber Vorsicht! Bereits ab dem ersten Verstoß sind Sie vorgemerkt zur Überprüfung der Fahreignung. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
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
                  '<span>Punkte in Flensburg:</span> Bereits ###extra[punkte-flensburg]>>>label### vorhanden. Also Vorsicht! Bereits ab dem ersten Verstoß sind Sie vorgemerkt zur Überprüfung der Fahreignung. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
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
                  '<span>Punkte in Flensburg:</span> Bereits ###extra[punkte-flensburg]>>>label### vorhanden. Also Vorsicht! Sie sind zur Überprüfung der Fahreignung vorgemerkt. Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich.',
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
                  '<span>Punkte in Flensburg:</span> ###extra[punkte-flensburg]>>>label###. Vorsicht! Jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich. Unter Umständen sind Sie zur Überprüfung der Fahreignung vorgemerkt.',
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
                  '<span>Auf Führerschein angewiesen:</span> Sie haben angegeben, dass Sie aus beruflichen Gründen auf Ihren Führerschein angewiesen sind.',
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
                  '<span>Auf Führerschein angewiesen:</span> Sie haben angegeben, dass Sie aus sonstigen Gründen auf Ihren Führerschein angewiesen sind.',
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
                  '<span>Rechtsschutzversicherung:</span> Sie haben angegeben, dass Sie rechtsschutzversichert sind.',
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
                  '<span>Rechtsschutzversicherung:</span> Wenn Sie nicht rechtsschutzversichert sind, können Sie über den Abschluss einer rückwirkenden Rechtsschutzversicherung den vollen Versicherungsschutz, auch für Fälle die bereits eingetreten sind, genießen.',
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
                  '<span>Postleitzahl:</span> ###zip###. Sie wohnen in einem Postleitzahlgebiet, in dem bereits mehr als 10.000 Bußgeldbescheide für ungültig erklärt wurden.',
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
        head: "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: "<p class='question__paragraph'>Unabhängig davon, ob sie mit einem mobilen oder einem stationären Gerät geblitzt wurden, gibt es zahlreiche Angriffspunkte in einem Bußgeldverfahren.</p><p class='question__paragraph'><b class='question__bold'>Stationäre Geräte</b> sind z.B. regelmäßig falsch gewartet. Dies würde die Messung sofort ungültig machen. Selbst neueste Geräte sind hiervon betroffen (s. <a class='question__link' href='https://www.tz.de/auto/blitzer-posse-sind-31000-bussgeldbescheide-futsch-zr-8475390.html' target='_blank'>31.000 Bußgeldbescheide ungültig</a>).</p><p class='question__paragraph'>Bei <b class='question__bold'>mobilen Geräten</b> sind die Anforderungen an eine verwertbare Messung noch höher: Häufig werden Fehler bei der Aufstellung der Messgeräte gemacht, der Messbeamte ist nicht ausreichend geschult (wir fordern immer den Schulungsnachweis an) oder andere Fahrzeuge machen die Messung ungültig. Lesen Sie hier mehr über Fehler bei der Messung: <a class='question__link' href='https://www.verkehrsanwaelte.de/news/details/blitzer-falsch-aufgestellt-freispruch-trotz-geschwindigkeitsueberschreitung/' target='_blank'>Blitzer falsch aufgestellt - Freispruch</a>.</p>",
      },
      props: null,
      condition: null,
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Warum soll ich SOS Verkehrsrecht mit dem Einspruch beauftragen?",
        body: "<p class='question__paragraph'>SOS Verkehrsrecht hat bereits mehr als 150.000 Mandanten bei der Verteidigung gegen die Bußgeldbehörde vertreten. Es handelt sich hier um eine der größten und erfolgreichsten Verkehrsrechtskanzleien Deutschlands.</p><p class='question__paragraph'>Als Laie ist es leider fast unmöglich, bei der Behörde erfolgreich Einspruch einzulegen, da diese regelmäßig die Einsicht auf Akteneinsicht verwehrt. Und ohne eine fachgerechte Prüfung der Messprotokolle, Verfahrensverzeichnisse etc. lassen sich die Fehler der Behörde nicht nachweisen. Zudem belasten Sie sich eventuell aus Versehen selbst, wenn Sie unerfahren im Rahmen des Verfahrens Stellung zu gewissen Sachverhalten nehmen müssen.</p>",
      },
      props: null,
      condition: null,
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
      condition: null,
    },
    {
      content: {
        head: "<b class='question__bold'>Frage:</b> Wie geht es jetzt weiter? Was sind die nächsten Schritte?",
        body: "<p class='question__paragraph'>Sie erteilen uns die Vollmacht. Dies geht ganz einfach Online und dauert nur 2 Minuten.</p><p class='question__paragraph'>Wir fordern Ihre Akte an und unsere Rechtsanwälte beginnen mit der Arbeit an ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.</p>@@@Button@@@",
      },
      props: {
        button: {
          text: 'Vollmacht ansehen',
          onClick: 'clickLongReadCta',
        },
      },
      condition: null,
    },
    {
      content: {
        head: "<b class='question__bold'>FAQ:</b> Häufige Fragen zu SOS Verkehrsrecht",
        body: '@@@Accordion@@@',
      },
      props: {
        accordion: {
          title: '',
          blocks: [
            {
              title: 'Ich bin nun mal zu schnell gefahren. Kann man da wirklich etwas machen?',
              content:
                'Ja. Ein Großteil unserer Mandanten ist tatsächlich zu schnell gefahren. Dies ist aber nicht ausschlaggebend für ein aus ihrer Sicht erfolgreiches Verfahren. Wichtig ist, dass der Nachweis ihrer Geschwindigkeitsüberschreitung zweifelsfrei erbracht werden kann. Wir sind spezialisiert darauf genau diesen Nachweis zu verhindern.',
              condition: null,
            },
            {
              title: 'Lohnt ein Einspruch, auch wenn ich noch keinen oder nur einen Punkt habe?',
              content:
                'Bereits ab dem ersten Verstoß sind Sie vorgemerkt zur Überprüfung der Fahreignung. Und jeder Punkt bleibt für 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Künftige Bußgelder können sozusagen willkürlich vom Sachbearbeiter erhöht werden, sobald sie der Behörde einmal negativ aufgefallen sind. Außerdem sehen Sie ja, wie schnell man plötzlich in eine solche Situation geraten kann. Und das Bußgeld wird Ihnen dann aufgrund des bereits eingetragenen Punktes wahrscheinlich auch noch erhöht. Eine Menge der Versicherungen verlangen schon beim 1. Punkt einen Preisaufschlag von bis zu 30% auf die Prämie der KFZ-Versicherung. Mitunter verweigern sie mit dem 1. Punkt komplett den Neuabschluss.',
              condition: null,
            },
            {
              title: 'Mir droht kein Fahrverbot. Sollte ich trotzdem gegen einen Punkt vorgehen?',
              content:
                'Diese Entscheidung können wir Ihnen nicht abnehmen. Generell gilt: Je länger sie punktefrei fahren, desto besser. Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein. Unsere Erfahrung zeigt, dass sich ein Einspruch beim ersten Punkt besonders häufig lohnt, weil man als “Erst-Täter” häufig bessere Chancen hat als ein Widerholungstäter. Das bedeutet für Sie: Wenn sie warten bis sie erneut geblitzt werden, können die Chancen schlechter stehen als beim ersten Punkt.',
              condition: null,
            },
            {
              title: 'Ich bin auf dem Foto zu erkennen. Bringt denn ein Einspruch überhaupt noch etwas?',
              content:
                'Das Foto ist aus juristischer Sicht erstmal irrelevant. Das sagt im Prinzip nur aus, dass Sie im Auto gesessen haben. Und das wollen wir ja auch gar nicht anzweifeln. Das was wir anzweifeln, ist die Messung selbst, dass Sie so schnell gefahren sind, wie von der Behörde behauptet. Außerdem müssen Sie immer bedenken, dass der Sachbearbeiter der Behörde, der Ihren Fall bearbeitet, Sie nicht persönlich kennt und somit nicht zwangsläufig nachvollziehen kann, ob Sie das auf dem Foto tatsächlich sind. Nur für den Fall, dass wir das Bildmaterial in Frage stellen.',
              condition: null,
            },
            {
              title: 'Mir liegt ein Bußgeldbescheid vor. Wie verhalte ich mich richtig?',
              content:
                "Wenn Ihnen bereits ein Bußgeldbescheid vorliegt ist Eile geboten. Ab dem Tag der Zustellung läuft die 14-Tägige Einspruchsfrist. Um das Verfahren nicht rechtskräftig werden zu lassen, sollte daher schnellstmöglich Einspruch eingelegt werden. Bitte zögern Sie nicht uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.",
              condition: null,
            },
            {
              title: 'Ich bin aus beruflichen oder sonstigen Gründen auf meinen Führerschein angewiesen.',
              content:
                'Wenn Sie aus beruflichen oder sonstigen Gründen auf Ihren Führerschein angewiesen sind bemühen wir uns darum ein sogenannte “Härtefallregelung” für sie geltend zu machen. D.h. wir versuchen ein Fahrverbot in jedem Fall abzuwenden, wenn dies durch Ihre besondere Situation begründet werden kann.',
              condition: null,
            },
            {
              title: 'Sonstige Rückfragen / mir wurden nicht alle Fragen beantwortet',
              content:
                "Bitte zögern Sie nicht uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.",
              condition: null,
            },
          ],
        },
      },
      condition: null,
    },
  ],
  footer: [
    {
      content: {
        head: '',
        body: '@@@AdvantageList@@@',
      },
      props: null,
      condition: null,
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
};

export default prio;
