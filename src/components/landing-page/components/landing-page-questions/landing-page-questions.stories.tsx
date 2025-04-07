import type { Meta, StoryObj } from '@storybook/react';
import LandingPageQuestions from './landing-page-questions.component';
import { fn } from '@storybook/test';
import MaxWidthDecorator from '../../../../../.storybook/decorators/max-width';

const meta = {
  title: 'Components/LandingPage/LandingPageQuestions',
  decorators: [MaxWidthDecorator(555)],
  component: LandingPageQuestions,
  args: {
    list: [
      {
        id: 510451,
        type: '###Question###',
        hideTop: false,
        hideBottom: true,
        title:
          "<b class='question__bold'>Frage:</b> Wie stehen meine Chancen für einen <u class='question__underline'>erfolgreichen</u> Einspruch?",
        body: [
          {
            type: '###Question###',
            content:
              "<p class='question__paragraph'>Unabhängig davon, ob sie mit einem mobilen oder einem stationären Gerät geblitzt wurden, gibt es zahlreiche Angriffspunkte in einem Bußgeldverfahren.</p><p class='question__paragraph'><b class='question__bold'>Stationäre Geräte</b> sind z.B. regelmäßig falsch gewartet. Dies würde die Messung sofort ungültig machen. Selbst neueste Geräte sind hiervon betroffen (s. <a class='question__link' href='https://www.tz.de/auto/blitzer-posse-sind-31000-bussgeldbescheide-futsch-zr-8475390.html' target='_blank'>31.000 Bußgeldbescheide ungültig</a>).</p><p class='question__paragraph'>Bei <b class='question__bold'>mobilen Geräten</b> sind die Anforderungen an eine verwertbare Messung noch höher: Häufig werden Fehler bei der Aufstellung der Messgeräte gemacht, der Messbeamte ist nicht ausreichend geschult (wir fordern immer den Schulungsnachweis an) oder andere Fahrzeuge machen die Messung ungültig. Lesen Sie hier mehr über Fehler bei der Messung: <a class='question__link' href='https://www.verkehrsanwaelte.de/news/details/blitzer-falsch-aufgestellt-freispruch-trotz-geschwindigkeitsueberschreitung/' target='_blank'>Blitzer falsch aufgestellt - Freispruch</a>.</p><p class='question__paragraph'>Statistisch gesehen sind laut einer unabhängigen Studie <b class='question__bold'>mehr als 56% der Bußgeldbescheide fehlerhaft</b>. Wer sich also wehrt, kann nicht nur ein drohendes Fahrverbot, sondern auch Bußgeld und Punkte in Flensburg verhindern.</p>",
            props: null,
          },
        ],
      },
      {
        id: 214686,
        type: '###Question###',
        hideTop: true,
        hideBottom: true,
        title: "<b class='question__bold'>Frage:</b> Warum soll ich SOS Verkehrsrecht mit dem Einspruch beauftragen?",
        body: [
          {
            type: '###Question###',
            content:
              "<p class='question__paragraph'>SOS Verkehrsrecht hat bereits mehr als 150.000 Mandanten bei der Verteidigung gegen die Bußgeldbehörde vertreten. Es handelt sich hier um <b class='question__bold'>eine der größten und erfolgreichsten Verkehrsrechtskanzleien Deutschlands.</b></p><p class='question__paragraph'>Als Laie ist es leider fast unmöglich, bei der Behörde erfolgreich Einspruch einzulegen, da diese regelmäßig die Einsicht auf Akteneinsicht verwehrt. Und ohne eine fachgerechte Prüfung der Messprotokolle, Verfahrensverzeichnisse etc. lassen sich die Fehler der Behörde nicht nachweisen. Zudem belasten Sie sich eventuell aus Versehen selbst, wenn Sie unerfahren im Rahmen des Verfahrens Stellung zu gewissen Sachverhalten nehmen müssen.</p>",
            props: null,
          },
        ],
      },
      {
        id: 345995,
        type: '###Review###',
        hideTop: false,
        hideBottom: false,
        title: '',
        body: [
          {
            type: '###Review###',
            content: '',
            props: {
              title: '<b>Erfahrungen:</b> Das sagen unsere Mandanten',
              reviews: [
                {
                  message:
                    'Sehr zu empfehlen. Ich musste mich um Nichts kümmern und bekam dann die positive Antwort, dass der Fall eingestellt wird - dankeschön an das professionelle Team.',
                  name: 'Anja S.',
                  link: {
                    href: 'https://www.ausgezeichnet.org/bewertungen-sos-verkehrsrecht.de-68VSTZ',
                    text: 'Ausgezeichnet.org',
                  },
                },
                {
                  message:
                    'Sehr kompetente Kanzlei. Alle bürokratischen Hürden werden einem abgenommen. Schnell und zuverlässig. Immer wieder gerne.',
                  name: 'J. Jack',
                  link: {
                    href: 'https://goo.gl/maps/2Sd9m69yRPHvkBPx6',
                    text: 'Google Maps',
                  },
                },
                {
                  message:
                    'Ich brauchte das erste mal Rechtsbeistand im Verkehrsrecht und meine Wahl bereue ich nicht. Ich war zu schnell unterwegs und wurde geblitzt. Die Kanzlei hat sich um alles gekümmert. Ein Tag nach der Anfrage bekam ich einen Anruf und wurde über alles aufgeklärt. Nach ein paar Wochen wurde das Verfahren eingestellt. Ich bin sehr zu Frieden und kann die Kanzlei nur empfehlen. Ich danke vielmals für den tollen Rechtsbeistand.',
                  name: 'John',
                  link: {
                    href: 'https://www.ausgezeichnet.org/bewertungen-sos-verkehrsrecht.de-68VSTZ',
                    text: 'Ausgezeichnet.org',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: 570611,
        type: '###Question###',
        hideTop: false,
        hideBottom: true,
        title: "<b class='question__bold'>Frage:</b> Was kostet die Beauftragung von SOS Verkehrsrecht?",
        body: [
          {
            type: '###Question###',
            content:
              "<p class='question__paragraph'>Im besten Fall entstehen Ihnen dadurch gar keine zusätzlichen Kosten, denn wenn Sie rechtsschutzversichert sind, rechnen wir unser Honorar direkt mit Ihrer Rechtsschutzversicherung ab. Ihnen entstehen dann keine zusätzlichen Kosten.</p><p class='question__paragraph'>Sollte die Rechtsschutzversicherung unerwartet keine Deckungszusage erteilen, halten wir zunächst mit Ihnen Rücksprache, ob wir für Sie als Selbstzahler tätig werden sollen oder nicht. So entsteht Ihnen kein Risiko!</p><p class='question__paragraph'>Wir rechnen derzeit u.a. folgenden Versicherungen ab:</p>",
            props: null,
          },
          {
            type: '###LogoCloud###',
            content: '',
            props: {
              logos: [
                {
                  name: '01-arag.png',
                  priority: 1,
                },
                {
                  name: '02-adac.png',
                  priority: 1,
                },
                {
                  name: '03-hug-coburg.png',
                  priority: 1,
                },
                {
                  name: '04-allianz.png',
                  priority: 1,
                },
                {
                  name: '05-roland.png',
                  priority: 1,
                },
                {
                  name: '06-oerag.png',
                  priority: 1,
                },
                {
                  name: '11-deutsche-direkt.png',
                  priority: 1,
                },
                {
                  name: '07-advocard.png',
                  priority: 1,
                },
                {
                  name: '08-das.png',
                  priority: 1,
                },
                {
                  name: '09-devk.png',
                  priority: 1,
                },
                {
                  name: '10-lvm.png',
                  priority: 1,
                },
                {
                  name: '12-concordia.png',
                  priority: 1,
                },
                {
                  name: '13-rv.png',
                  priority: 1,
                },
                {
                  name: '14-debeka.png',
                  priority: 1,
                },
                {
                  name: '15-auxilia.png',
                  priority: 1,
                },
                {
                  name: '16-nrv.png',
                  priority: 1,
                },
                {
                  name: '17-wuerttenbergische.png',
                  priority: 1,
                },
                {
                  name: '18-zurich.png',
                  priority: 1,
                },
                {
                  name: '19-allrecht.png',
                  priority: 1,
                },
                {
                  name: '20-itzehoer.png',
                  priority: 1,
                },
                {
                  name: '21-rechtsschutzunion.png',
                  priority: 1,
                },
                {
                  name: '22-dmb.png',
                  priority: 1,
                },
                {
                  name: '23-wgv.png',
                  priority: 1,
                },
                {
                  name: '24-vgh.png',
                  priority: 1,
                },
                {
                  name: '25-diecontinentale.png',
                  priority: 1,
                },
                {
                  name: '26-mecklenburgische.png',
                  priority: 1,
                },
                {
                  name: '27-bgv.png',
                  priority: 1,
                },
                {
                  name: '28-provinzial.png',
                  priority: 1,
                },
                {
                  name: '29-vhv.png',
                  priority: 1,
                },
                {
                  name: '30-ergo.png',
                  priority: 1,
                },
                {
                  name: '31-ideal.png',
                  priority: 1,
                },
                {
                  name: '32-hdi.png',
                  priority: 1,
                },
                {
                  name: '33-janitos.png',
                  priority: 1,
                },
                {
                  name: '34-axa.png',
                  priority: 1,
                },
                {
                  name: '35-deurag.png',
                  priority: 1,
                },
              ],
              paths: import.meta.glob('../../../../../.storybook/assets/companies/*', {
                eager: true,
                query: '?url',
                import: 'default',
              }),
            },
          },
          {
            type: '###Question###',
            content:
              "<p><b class='question__bold'>Ihre Versicherung fehlt?</b> Kein Problem - wir nehmen sofort nach Vollmachtserteilung Kontakt mit Ihrer Versicherung auf und kümmern uns um alles weitere.</p><p class='question__paragraph'>Sollten sie keine Rechtsschutzversicherung haben, gibt es zwei Möglichkeiten:</p><ol class='question__list'><li class='question__list-item'>Wir vertreten Sie als <b class='question__bold'>Privatzahler</b> für einen günstigen Pauschalpreis i.H.v. 500,- Euro inkl. MwSt. Aufgrund unserer langjährigen Erfahrung und hohen Spezialisierung sind wir in der Lage diesen günstigen Preis anzubieten. In dem Preis sind alle Kosten für das außergerichtliche Verfahren abgegolten. Sollte es zu einem Gerichtstermin kommen den wir für sie wahrnehmen sollen, fällt eine weitere Gebühr an. Hierüber informieren wir Sie rechtzeitig und helfen Ihnen bei der Entscheidung.</li><li class='question__list-item'>Sie schließen eine <b class='question__bold'>rückwirkende Rechtsschutzversicherung</b> ab. Dies ist erst seit einigen Jahren möglich und bietet Ihnen den vollen Versicherungsschutz - auch für Fälle die bereits eingetreten sind. Eine Möglichkeit in diese Richtung bietet die KS/AUXILIA mit dem Verkehrs-Rechtsschutz flex sofort. Wenn Sie mehr über diese Möglichkeit erfahren möchten bzw. <b class='question__bold'>einfach und schnell diese Versicherung gleich abschließen</b> möchten, <a class='question__link' href='https://www.ks-auxilia.de/beitrags-rechner-rightmart' target='_blank'>klicken Sie hier</a>. Erteilen Sie uns die Vollmacht in diesem Fall erst nachdem Sie den rückwirkenden Rechtsschutz abgeschlossen haben. Sonst könnte die Versicherung die Kostenübernahme verweigern.</li></ol>",
            props: null,
          },
        ],
      },
      {
        id: 197669,
        type: '###Question###',
        hideTop: false,
        hideBottom: true,
        title: "<b class='question__bold'>Frage:</b> Wie geht es jetzt weiter? Was sind die nächsten Schritte?",
        body: [
          {
            type: '###Question###',
            content:
              "<ol class='question__list'><li class='question__list-item'>Sie erteilen uns die Vollmacht. Dies geht ganz einfach online und dauert nur 2 Minuten.</li><li class='question__list-item'>Wir fordern Ihre Akte an und beginnen mit der Arbeit an Ihrem Fall. Sollten wir Rückfragen haben oder Ihre Zuarbeit benötigen, melden wir uns umgehend bei Ihnen.</li></ol>",
            props: null,
          },
          {
            type: '###Button###',
            content: '',
            props: {
              text: 'Vollmacht ansehen',
              onClick: fn(),
            },
          },
        ],
      },
      {
        id: 35882,
        type: '###Accordion###',
        hideTop: false,
        hideBottom: false,
        title: "<b class='question__bold'>FAQ:</b> Weitere häufig gestellte Fragen",
        body: [
          {
            type: '###Accordion###',
            content: '',
            props: {
              title: '',
              blocks: [
                {
                  title: 'Kann ein Einspruch meine Lage verschlechtern?',
                  content:
                    "<p class='question__paragraph'>Nein, die Strafe kann sich im laufenden Verfahren durch einen Einspruch nicht verschlechtern, sondern immer nur verbessern oder gänzlich entfallen.</p>",
                },
                {
                  title: 'Lohnt ein Einspruch, auch wenn ich noch keinen oder wenig Punkte habe?',
                  content:
                    "<p class='question__paragraph'>Diese Entscheidung können wir Ihnen nicht abnehmen. Generell gilt: Je länger sie punktefrei fahren, desto besser. Je mehr Punkte sie sammeln, desto schneller verlieren Sie ihren Führerschein.</p><p class='question__paragraph'>Unsere Erfahrung zeigt, dass sich ein Einspruch beim ersten Punkt besonders häufig lohnt, weil man als “Erst-Täter” häufig bessere Chancen hat als ein Widerholungstäter. Das bedeutet für Sie: Wenn sie warten bis sie erneut geblitzt werden, können die Chancen schlechter stehen als beim ersten Punkt.</p><p class='question__paragraph'></p><p class='question__paragraph'>Jeder Punkt bleibt für mindestens 2,5 Jahre im Fahreignungsregister bestehen und zieht weitere Konsequenzen mit sich als das Bußgeld, das Ihnen die Behörde jetzt berechnet. Es lohnt sich also gegen jeden Punkt vorzugehen, um künftig höhere Kosten durch eine MPU und den Fahrerlaubnisentzug zu vermeiden.</p>",
                },
                {
                  title: 'Ich bin nun mal zu schnell gefahren. Kann man da wirklich etwas machen?',
                  content:
                    'Ja. Ein Großteil unserer Mandanten ist tatsächlich zu schnell gefahren. Dies ist aber nicht ausschlaggebend für ein aus Ihrer Sicht erfolgreiches Verfahren. Wichtig ist, dass der Nachweis ihrer Geschwindigkeitsüberschreitung zweifelsfrei erbracht werden kann. Wir sind darauf spezialisiert, genau diesen Nachweis zu verhindern.',
                },
                {
                  title: 'Ich bin auf dem Foto zu erkennen. Bringt denn ein Einspruch überhaupt noch etwas?',
                  content:
                    'Das Foto ist aus juristischer Sicht erstmal irrelevant. Das sagt im Prinzip nur aus, dass Sie im Auto gesessen haben. Und das wollen wir ja auch gar nicht anzweifeln. Das was wir anzweifeln, ist die Messung selbst, dass Sie so schnell gefahren sind, wie von der Behörde behauptet. Außerdem müssen Sie immer bedenken, dass der Sachbearbeiter der Behörde, der Ihren Fall bearbeitet, Sie nicht persönlich kennt und somit nicht zwangsläufig nachvollziehen kann, ob Sie das auf dem Foto tatsächlich sind (für den Fall, dass wir das Bildmaterial in Frage stellen).',
                },
                {
                  title:
                    'Ich bin gefahren, aber das Fahrzeug ist nicht auf mich gemeldet. Wie verhalte ich mich richtig?',
                  content:
                    'Kein Problem, als Fahrer verteidigen wir Sie unabhängig davon, ob Sie der Halter des Fahrzeuges sind.',
                },
                {
                  title: 'Ich habe bereits Post von der Behörde erhalten. Wie verhalte ich mich richtig?',
                  content:
                    "<p class='question__paragraph'><b class='question__bold' style='color:#004473'>Zeugenfragebogen</b></p><p class='question__paragraph'>Wenn Ihnen bisher nur ein Zeugenfragebogen vorliegt, prüfen Sie zuerst, ob Sie mit dem Fahrzeug gefahren sind.</p><p class='question__paragraph'>Falls Ihre Antwort “Nein” lautet, geben Sie an “Fahrzeug wurde überlassen an:” + Name und Anschrift des Fahrers.</p><p class='question__paragraph'><b class='question__bold'>Falls Ihre Antwort “Ja” lautet, empfehlen wir Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p><p class='question__paragraph'><b class='question__bold' style='color:#004473'>Anhörungsbogen</b></p><p class='question__paragraph'>Wenn Ihnen bereits ein Anhörungsbogen vorliegt, prüfen Sie die personenbezogenen Daten (Name, Anschrift, Geburtsdatum und Geburtsort) auf dem Schreiben. Sollten diese fehlerhaft sein, müssen Sie diese korrigieren und den Anhörungsbogen binnen 7 Tagen an die Behörde zurückschicken.</p><p class='question__paragraph'><b class='question__bold'>Wir empfehlen Ihnen, uns ab jetzt mit der anwaltlichen Vertretung zu beauftragen, um eine größtmögliche Chance auf die Einstellung des Verfahrens zu haben.</b></p><p class='question__paragraph'><b class='question__bold' style='color:#004473'>Bußgeldbescheid</b></p><p class='question__paragraph'>Wenn Ihnen bereits ein Bußgeldbescheid vorliegt, ist Eile geboten. Ab dem Tag der Zustellung läuft die 14-tägige Einspruchsfrist. Um das Verfahren nicht rechtskräftig werden zu lassen, <b class='question__bold'>sollte daher schnellstmöglich Einspruch eingelegt werden</b>. Bitte zögern Sie nicht, uns bei weiteren Fragen zu kontaktieren. Am besten erreichen Sie uns unter: 030-2089812 12 oder per Mail an <a class='question__link' href='mailto:erstberatung@sos-verkehrsrecht.de' target='_blank'>erstberatung@sos-verkehrsrecht.de</a>.</p>",
                },
              ],
            },
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof LandingPageQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LandingPageQuestions',
};
