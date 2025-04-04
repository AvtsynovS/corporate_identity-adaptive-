import { useNavigate } from "react-router";
import { Button } from "../../components";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  text-align: justify;
  margin: 50px 100px;
`;

const StyledOl = styled.ol`
  counter-reset: item;
`;

const StyledLi = styled.li`
  display: block;

  &:before {
    content: counters(item, ".") ". ";
    counter-increment: item;
  }
`;

export const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <Button
        view="link"
        label="Вернуться на главную страницу"
        onClick={() => navigate("/")}
      />
      <div>
        <p>Политика в отношении обработки персональных данных</p>
        <StyledOl>
          <StyledLi>
            Общие положения Настоящая политика обработки персональных данных
            составлена в соответствии с требованиями Федерального закона от
            27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок
            обработки персональных данных и меры по обеспечению безопасности
            персональных данных, предпринимаемые ИП Липунов М.А. (далее –
            Оператор).
            <StyledOl>
              <StyledLi>
                Оператор ставит своей важнейшей целью и условием осуществления
                своей деятельности соблюдение прав и свобод человека и
                гражданина при обработке его персональных данных, в том числе
                защиты прав на неприкосновенность частной жизни, личную и
                семейную тайну.
              </StyledLi>
              <StyledLi>
                Настоящая политика Оператора в отношении обработки персональных
                данных (далее – Политика) применяется ко всей информации,
                которую Оператор может получить о посетителях веб-сайта{" "}
                <a
                  href="https://firstyle.free-creative.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://firstyle.free-creative.com
                </a>
                .
              </StyledLi>
            </StyledOl>
          </StyledLi>
        </StyledOl>
        <StyledOl>
          <StyledLi>Основные понятия, используемые в Политике</StyledLi>
          <StyledOl>
            <StyledLi>
              Автоматизированная обработка персональных данных – обработка
              персональных данных с помощью средств вычислительной техники;
            </StyledLi>
            <StyledLi>
              Блокирование персональных данных – временное прекращение обработки
              персональных данных (за исключением случаев, если обработка
              необходима для уточнения персональных данных);
            </StyledLi>
            <StyledLi>
              Веб-сайт – совокупность графических и информационных материалов, а
              также программ для ЭВМ и баз данных, обеспечивающих их доступность
              в сети интернет по сетевому адресу{" "}
              <a
                href="https://firstyle.free-creative.com"
                target="_blank"
                rel="noreferrer"
              >
                https://firstyle.free-creative.com
              </a>
              ;
            </StyledLi>
            <StyledLi>
              Информационная система персональных данных — совокупность
              содержащихся в базах данных персональных данных, и обеспечивающих
              их обработку информационных технологий и технических средств;
            </StyledLi>
            <StyledLi>
              Обезличивание персональных данных — действия, в результате которых
              невозможно определить без использования дополнительной информации
              принадлежность персональных данных конкретному Пользователю или
              иному субъекту персональных данных;
            </StyledLi>
            <StyledLi>
              Обработка персональных данных – любое действие (операция) или
              совокупность действий (операций), совершаемых с использованием
              средств автоматизации или без использования таких средств с
              персональными данными, включая сбор, запись, систематизацию,
              накопление, хранение, уточнение (обновление, изменение),
              извлечение, использование, передачу (распространение,
              предоставление, доступ), обезличивание, блокирование, удаление,
              уничтожение персональных данных;
            </StyledLi>
            <StyledLi>
              {" "}
              Оператор – государственный орган, муниципальный орган, юридическое
              или физическое лицо, самостоятельно или совместно с другими лицами
              организующие и (или) осуществляющие обработку персональных данных,
              а также определяющие цели обработки персональных данных, состав
              персональных данных, подлежащих обработке, действия (операции),
              совершаемые с персональными данными;
            </StyledLi>
            <StyledLi>
              Персональные данные – любая информация, относящаяся прямо или
              косвенно к определенному или определяемому Пользователю веб-сайта{" "}
              <a
                href="https://firstyle.free-creative.com"
                target="_blank"
                rel="noreferrer"
              >
                https://firstyle.free-creative.com
              </a>
              ;
            </StyledLi>
            <StyledLi>
              Пользователь – любой посетитель веб-сайта{" "}
              <a
                href="https://firstyle.free-creative.com"
                target="_blank"
                rel="noreferrer"
              >
                https://firstyle.free-creative.com
              </a>
              ;
            </StyledLi>
            <StyledLi>
              Предоставление персональных данных – действия, направленные на
              раскрытие персональных данных определенному лицу или определенному
              кругу лиц;
            </StyledLi>
            <StyledLi>
              Распространение персональных данных – любые действия, направленные
              на раскрытие персональных данных неопределенному кругу лиц
              (передача персональных данных) или на ознакомление с персональными
              данными неограниченного круга лиц, в том числе обнародование
              персональных данных в средствах массовой информации, размещение в
              информационно-телекоммуникационных сетях или предоставление
              доступа к персональным данным каким-либо иным способом;
            </StyledLi>
            <StyledLi>
              Трансграничная передача персональных данных – передача
              персональных данных на территорию иностранного государства органу
              власти иностранного государства, иностранному физическому или
              иностранному юридическому лицу;
            </StyledLi>
            <StyledLi>
              Уничтожение персональных данных – любые действия, в результате
              которых персональные данные уничтожаются безвозвратно с
              невозможностью дальнейшего восстановления содержания персональных
              данных в информационной системе персональных данных и (или)
              уничтожаются материальные носители персональных данных.
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>
            Оператор может обрабатывать следующие персональные данные
            Пользователя
          </StyledLi>
          <StyledOl>
            <StyledLi>Фамилия, имя, отчество;</StyledLi>
            <StyledLi>Электронный адрес;</StyledLi>
            <StyledLi>Номера телефонов;</StyledLi>
            <StyledLi>
              Также на сайте происходит сбор и обработка обезличенных данных о
              посетителях (в т.ч. файлов «cookie») с помощью сервисов
              интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
            </StyledLi>
            <StyledLi>
              Вышеперечисленные данные далее по тексту Политики объединены общим
              понятием Персональные данные.
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>Цели обработки персональных данных</StyledLi>
          <StyledOl>
            <StyledLi>
              Цель обработки персональных данных Пользователя — информирование
              Пользователя посредством отправки электронных писем.
            </StyledLi>
            <StyledLi>
              Также Оператор имеет право направлять Пользователю уведомления о
              новых продуктах и услугах, специальных предложениях и различных
              событиях. Пользователь всегда может отказаться от получения
              информационных сообщений, направив Оператору письмо на адрес
              электронной почты{" "}
              <a href="mailto:hello@free-creative.com">
                hello@free-creative.com
              </a>{" "}
              с пометкой «Отказ от уведомлений о новых продуктах и услугах и
              специальных предложениях».
            </StyledLi>
            <StyledLi>
              Обезличенные данные Пользователей, собираемые с помощью сервисов
              интернет-статистики, служат для сбора информации о действиях
              Пользователей на сайте, улучшения качества сайта и его содержания.
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>Правовые основания обработки персональных данных</StyledLi>
          <StyledOl>
            <StyledLi>
              Оператор обрабатывает персональные данные Пользователя только в
              случае их заполнения и/или отправки Пользователем самостоятельно
              через специальные формы, расположенные на сайте{" "}
              <a
                href="https://firstyle.free-creative.com"
                target="_blank"
                rel="noreferrer"
              >
                https://firstyle.free-creative.com
              </a>
              . Заполняя соответствующие формы и/или отправляя свои персональные
              данные Оператору, Пользователь выражает свое согласие с данной
              Политикой.
            </StyledLi>
            <StyledLi>
              Оператор обрабатывает обезличенные данные о Пользователе в случае,
              если это разрешено в настройках браузера Пользователя (включено
              сохранение файлов «cookie» и использование технологии JavaScript).
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>
            Порядок сбора, хранения, передачи и других видов обработки
            персональных данных Безопасность персональных данных, которые
            обрабатываются Оператором, обеспечивается путем реализации правовых,
            организационных и технических мер, необходимых для выполнения в
            полном объеме требований действующего законодательства в области
            защиты персональных данных.
          </StyledLi>
          <StyledOl>
            <StyledLi>
              Оператор обеспечивает сохранность персональных данных и принимает
              все возможные меры, исключающие доступ к персональным данным
              неуполномоченных лиц.
            </StyledLi>
            <StyledLi>
              Персональные данные Пользователя никогда, ни при каких условиях не
              будут переданы третьим лицам, за исключением случаев, связанных с
              исполнением действующего законодательства.
            </StyledLi>
            <StyledLi>
              В случае выявления неточностей в персональных данных, Пользователь
              может актуализировать их самостоятельно, путем направления
              Оператору уведомление на адрес электронной почты Оператора{" "}
              <a href="mailto:hello@free-creative.com">
                hello@free-creative.com
              </a>{" "}
              с пометкой «Актуализация персональных данных».
            </StyledLi>
            <StyledLi>
              Срок обработки персональных данных является неограниченным.
              Пользователь может в любой момент отозвать свое согласие на
              обработку персональных данных, направив Оператору уведомление
              посредством электронной почты на электронный адрес Оператора{" "}
              <a href="mailto:hello@free-creative.com">
                hello@free-creative.com
              </a>{" "}
              с пометкой «Отзыв согласия на обработку персональных данных».
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>Трансграничная передача персональных данных</StyledLi>
          <StyledOl>
            <StyledLi>
              Оператор до начала осуществления трансграничной передачи
              персональных данных обязан убедиться в том, что иностранным
              государством, на территорию которого предполагается осуществлять
              передачу персональных данных, обеспечивается надежная защита прав
              субъектов персональных данных.
            </StyledLi>
            <StyledLi>
              Трансграничная передача персональных данных на территории
              иностранных государств, не отвечающих вышеуказанным требованиям,
              может осуществляться только в случае наличия согласия в письменной
              форме субъекта персональных данных на трансграничную передачу его
              персональных данных и/или исполнения договора, стороной которого
              является субъект персональных данных.
            </StyledLi>
          </StyledOl>
        </StyledOl>
        <StyledOl>
          <StyledLi>Заключительные положения</StyledLi>
          <StyledOl>
            <StyledLi>
              Пользователь может получить любые разъяснения по интересующим
              вопросам, касающимся обработки его персональных данных,
              обратившись к Оператору с помощью электронной почты
              <a href="mailto:hello@free-creative.com">
                hello@free-creative.com
              </a>
              .
            </StyledLi>
            <StyledLi>
              В данном документе будут отражены любые изменения политики
              обработки персональных данных Оператором. Политика действует
              бессрочно до замены ее новой версией.
            </StyledLi>
            <StyledLi>
              Актуальная версия Политики в свободном доступе расположена в сети
              Интернет по адресу{" "}
              <a
                href="https://firstyle.free-creative.com/poStyledLicy"
                target="_blank"
                rel="noreferrer"
              >
                https://firstyle.free-creative.com/poStyledLicy
              </a>
              .
            </StyledLi>
          </StyledOl>
        </StyledOl>
      </div>
    </StyledWrapper>
  );
};
