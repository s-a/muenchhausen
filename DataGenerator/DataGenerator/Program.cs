using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace DataGenerator
{
    using System;
    using System.Globalization;

    class I18nFile
    {
      public List<string> month = new List<string>();
      public List<string> weekdays = new List<string>(); 

    }

    class Program
    {
        static void Main()
        {
          string[] s =  {
              "af-ZA",
              "sq-AL",
              "ar-DZ",
              "ar-BH",
              "ar-EG",
              "ar-IQ",
              "ar-JO",
              "ar-KW",
              "ar-LB",
              "ar-LY",
              "ar-MA",
              "ar-OM",
              "ar-QA",
              "ar-SA",
              "ar-SY",
              "ar-TN",
              "ar-AE",
              "ar-YE",
              "hy-AM",
              "Cy-az-AZ",
              "Lt-az-AZ",
              "eu-ES",
              "be-BY",
              "bg-BG",
              "ca-ES",
              "zh-CN",
              "zh-HK",
              "zh-MO",
              "zh-SG",
              "zh-TW",
              "zh-CHS",
              "zh-CHT",
              "hr-HR",
              "cs-CZ",
              "da-DK",
              "div-MV",
              "nl-BE",
              "nl-NL",
              "en-AU",
              "en-BZ",
              "en-CA",
              "en-CB",
              "en-IE",
              "en-JM",
              "en-NZ",
              "en-PH",
              "en-ZA",
              "en-TT",
              "en-GB",
              "en-US",
              "en-ZW",
              "et-EE",
              "fo-FO",
              "fa-IR",
              "fi-FI",
              "fr-BE",
              "fr-CA",
              "fr-FR",
              "fr-LU",
              "fr-MC",
              "fr-CH",
              "gl-ES",
              "ka-GE",
              "de-AT",
              "de-DE",
              "de-LI",
              "de-LU",
              "de-CH",
              "el-GR",
              "gu-IN",
              "he-IL",
              "hi-IN",
              "hu-HU",
              "is-IS",
              "id-ID",
              "it-IT",
              "it-CH",
              "ja-JP",
              "kn-IN",
              "kk-KZ",
              "kok-IN",
              "ko-KR",
              "ky-KZ",
              "lv-LV",
              "lt-LT",
              "mk-MK",
              "ms-BN",
              "ms-MY",
              "mr-IN",
              "mn-MN",
              "nb-NO",
              "nn-NO",
              "pl-PL",
              "pt-BR",
              "pt-PT",
              "pa-IN",
              "ro-RO",
              "ru-RU",
              "sa-IN",
              "Cy-sr-SP",
              "Lt-sr-SP",
              "sk-SK",
              "sl-SI",
              "es-AR",
              "es-BO",
              "es-CL",
              "es-CO",
              "es-CR",
              "es-DO",
              "es-EC",
              "es-SV",
              "es-GT",
              "es-HN",
              "es-MX",
              "es-NI",
              "es-PA",
              "es-PY",
              "es-PE",
              "es-PR",
              "es-ES",
              "es-UY",
              "es-VE",
              "sw-KE",
              "sv-FI",
              "sv-SE",
              "syr-SY",
              "ta-IN",
              "tt-RU",
              "te-IN",
              "th-TH",
              "tr-TR",
              "uk-UA",
              "ur-PK",
              "Cy-uz-UZ",
              "Lt-uz-UZ",
              "vi-VN"
          };

          var json = new JavaScriptSerializer().Serialize(s);
          System.IO.StreamWriter file = new System.IO.StreamWriter("..\\..\\..\\..\\i18n-cultures.json");
          file.WriteLine(json);
          file.Close();

          foreach (string lng in s)
          {
              I18nFile ifile = new I18nFile();
              CultureInfo cu = new CultureInfo(lng);
              System.Threading.Thread.CurrentThread.CurrentCulture = cu;

              //weekdays
              DayOfWeek firstDay = CultureInfo.CurrentCulture.DateTimeFormat.FirstDayOfWeek;
              for (int dayIndex = 0; dayIndex < 7; dayIndex++)
              {
                var currentDay = ((DayOfWeek)(((int)firstDay + dayIndex) % 7));
                string day = CultureInfo.CurrentCulture.DateTimeFormat.GetDayName(currentDay);
                ifile.weekdays.Add(day);
          // Output the day
          //file2.WriteLine(json);
        }

        // month
        for (int m = 1; m < 14; m++)
          {
            string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(m);
            // Console.Write (m  +" "+ lng+ " " + monthName + "\n");
            ifile.month.Add(monthName);
          }
                 

          json = new JavaScriptSerializer().Serialize(ifile);
          string fn = "..\\..\\..\\..\\i18n\\" + lng + ".json";
          System.IO.StreamWriter file2 = new System.IO.StreamWriter(fn);

          json = JsonHelper.FormatJson(json);
          file2.WriteLine(json);
          file2.Close();
          Console.WriteLine(fn);
        }
        Console.WriteLine("done");
        Console.Read();
      }
    }

  class JsonHelper
  {
    private const string INDENT_STRING = "    ";
    public static string FormatJson(string str)
    {
      var indent = 0;
      var quoted = false;
      var sb = new StringBuilder();
      for (var i = 0; i < str.Length; i++)
      {
        var ch = str[i];
        switch (ch)
        {
          case '{':
          case '[':
            sb.Append(ch);
            if (!quoted)
            {
              sb.AppendLine();
              Enumerable.Range(0, ++indent).ForEach(item => sb.Append(INDENT_STRING));
            }
            break;
          case '}':
          case ']':
            if (!quoted)
            {
              sb.AppendLine();
              Enumerable.Range(0, --indent).ForEach(item => sb.Append(INDENT_STRING));
            }
            sb.Append(ch);
            break;
          case '"':
            sb.Append(ch);
            bool escaped = false;
            var index = i;
            while (index > 0 && str[--index] == '\\')
              escaped = !escaped;
            if (!escaped)
              quoted = !quoted;
            break;
          case ',':
            sb.Append(ch);
            if (!quoted)
            {
              sb.AppendLine();
              Enumerable.Range(0, indent).ForEach(item => sb.Append(INDENT_STRING));
            }
            break;
          case ':':
            sb.Append(ch);
            if (!quoted)
              sb.Append(" ");
            break;
          default:
            sb.Append(ch);
            break;
        }
      }
      return sb.ToString();
    }
  }

  static class Extensions
  {
    public static void ForEach<T>(this IEnumerable<T> ie, Action<T> action)
    {
      foreach (var i in ie)
      {
        action(i);
      }
    }
  }
}
