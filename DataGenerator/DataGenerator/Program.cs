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
  using System.Reflection;

  class I18nFile
  {
      public List<string> month = new List<string>();
      public List<string> weekdays = new List<string>();
      public string shortDatePattern;
      public string longDatePattern;
      public string shortTimePattern;
      public string longTimePattern;

  }

  class I18nNumber
  {
    public NumberFormatInfo numberFormatInfo;
  }

  class I18nBoolean
  {
    public string _true = "True";
    public string _false = "False";
  }

  class I18nCulture
  {
    public string name;
    public string englishname;
    public string nativename;
  }

 
  class Program {

    private static string rootPath;


    private static string[] s =  {
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
    static string findUp(string currentFolder, string filename)
    {
        string fn = System.IO.Path.Combine(currentFolder, filename);
        if (System.IO.File.Exists(fn))
        {
            return currentFolder;
        }
        else
        {
            string parentFolder = "";
            try
            {
                parentFolder = System.IO.Directory.GetParent(currentFolder).FullName;
            }
            catch (System.Exception e)
            {
                throw new System.Exception("Cannot find " + filename + " in parent folders", e);
            }
            return findUp(parentFolder, filename);
        }
    }

    static void saveObjectToJSON(Object obj, string filename)
    {

        string json = new JavaScriptSerializer().Serialize(obj);
        System.IO.StreamWriter file2 = new System.IO.StreamWriter(filename);

        json = JsonHelper.FormatJson(json);
        file2.WriteLine(json);
        file2.Close();
        Console.WriteLine("wrote data to " + filename);
    }


    static void fake_date()
    {
      foreach (string lng in s)
      {
        I18nFile ifile = new I18nFile();
        CultureInfo cu = new CultureInfo(lng);
        System.Threading.Thread.CurrentThread.CurrentCulture = cu;

        //weekdays
        DayOfWeek firstDay = CultureInfo.CurrentCulture.DateTimeFormat.FirstDayOfWeek;
        var currentDay = ((DayOfWeek)(((int)firstDay + 6) % 7));
        string day = CultureInfo.CurrentCulture.DateTimeFormat.GetDayName(currentDay);
        ifile.weekdays.Add(day);

        for (int dayIndex = 0; dayIndex < 6; dayIndex++)
        {
          currentDay = ((DayOfWeek)(((int)firstDay + dayIndex) % 7));
          day = CultureInfo.CurrentCulture.DateTimeFormat.GetDayName(currentDay);
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

        ifile.shortDatePattern = CultureInfo.CurrentCulture.DateTimeFormat.ShortDatePattern;
        ifile.longDatePattern = CultureInfo.CurrentCulture.DateTimeFormat.LongDatePattern;
        ifile.shortTimePattern = CultureInfo.CurrentCulture.DateTimeFormat.ShortTimePattern;
        ifile.longTimePattern = CultureInfo.CurrentCulture.DateTimeFormat.LongTimePattern;

        string fn = System.IO.Path.Combine(rootPath, "lib", "i18n", "datetimeformat", lng + ".json");
        saveObjectToJSON(ifile, fn);
      }
      Console.WriteLine("done");
    }

    static void fake_number()
    {

      foreach (string lng in s)
      {
        I18nNumber ifile = new I18nNumber();
        CultureInfo cu = new CultureInfo(lng);
        System.Threading.Thread.CurrentThread.CurrentCulture = cu;
        ifile.numberFormatInfo = CultureInfo.CurrentCulture.NumberFormat;
        string fn = System.IO.Path.Combine(rootPath, "lib", "i18n", "numberformat", lng + ".json");
        saveObjectToJSON(ifile, fn);
      }
      Console.WriteLine("done");
      Console.ReadKey();
    }

    static void SetDefaultCulture(CultureInfo culture)
    {
      Type type = typeof(CultureInfo);

      try
      {
        type.InvokeMember("s_userDefaultCulture",
                            System.Reflection.BindingFlags.SetField | BindingFlags.NonPublic | BindingFlags.Static,
                            null,
                            culture,
                            new object[] { culture });

        type.InvokeMember("s_userDefaultUICulture",
                            BindingFlags.SetField | BindingFlags.NonPublic | BindingFlags.Static,
                            null,
                            culture,
                            new object[] { culture });
      }
      catch { }

      try
      {
        type.InvokeMember("m_userDefaultCulture",
                            BindingFlags.SetField | BindingFlags.NonPublic | BindingFlags.Static,
                            null,
                            culture,
                            new object[] { culture });

        type.InvokeMember("m_userDefaultUICulture",
                            BindingFlags.SetField | BindingFlags.NonPublic | BindingFlags.Static,
                            null,
                            culture,
                            new object[] { culture });
      }
      catch { }
    }

    static void fake_culture()
    {



      foreach (string lng in s)
      {

        CultureInfo cu = new CultureInfo("ja-JP");
        System.Threading.Thread.CurrentThread.CurrentCulture = cu;
        CultureInfo.DefaultThreadCurrentCulture = cu;
        CultureInfo.DefaultThreadCurrentUICulture = cu;
        SetDefaultCulture(cu);
        Dictionary<string, string> ifile = new Dictionary<string, string>();
        var regex = new System.Text.RegularExpressions.Regex(@"([\w+\s*\.*]+\))");
        foreach (var item in CultureInfo.GetCultures(CultureTypes.FrameworkCultures))
        {

          I18nCulture country = new I18nCulture();
          var match = regex.Match(item.DisplayName);
          string countryName = match.Value.Length == 0 ? item.EnglishName : match.Value.Substring(0, match.Value.Length - 1);
          if (item.Name != "")
          { 
            ifile.Add(item.Name, item.DisplayName);
          }
        }

        string fn = System.IO.Path.Combine(rootPath, "lib", "i18n", "culture", lng + ".json");
        Console.WriteLine("save : " + fn);
        saveObjectToJSON(ifile, fn);
      }


      //string fn = System.IO.Path.Combine(rootPath, "lib", "i18n", "numberformat", lng + ".json");
      //saveObjectToJSON(ifile, fn);

      Console.WriteLine("done");
     // Console.ReadKey();
    }


    static void fake_boolean()
    {
      foreach (string lng in s)
      {
        I18nBoolean ifile = new I18nBoolean();
        CultureInfo cu = new CultureInfo(lng);
        System.Threading.Thread.CurrentThread.CurrentCulture = cu;
        ifile._true = true.ToString(cu);
        ifile._false = false.ToString(cu);
        string fn = System.IO.Path.Combine(rootPath, "lib", "i18n", "bool", lng + ".json");
        saveObjectToJSON(ifile, fn);
      }
      Console.WriteLine("done");
      Console.ReadKey();
    }

    static void Main()
    {
      Program.rootPath = findUp(System.IO.Directory.GetCurrentDirectory(), "package.json");
      Console.WriteLine(rootPath);

      string d = System.IO.Path.Combine(rootPath, "lib", "cultures.json");
      saveObjectToJSON(s, d);

      fake_culture();
      ///fake_date();
      ///fake_number();
    }
  }

}
