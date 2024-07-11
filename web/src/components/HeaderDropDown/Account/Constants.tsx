import FeatureIconV1 from "../../FeatureIcon/FeatureIconV1";
import FeatureIconV2 from "../../FeatureIcon/FeatureIconV2";
import FeatureIconV3 from "../../FeatureIcon/FeatureIconV3";
import FeatureIconV4 from "../../FeatureIcon/FeatureIconV4";
import FeatureIconV5 from "../../FeatureIcon/FeatureIconV5";
import FeatureIconV6 from "../../FeatureIcon/FeatureIconV6";
import FeatureIconV7 from "../../FeatureIcon/FeatureIconV7";

export const MENUS = {
  title: "MainMenu",
  data: [
    {
      logoIcon: <FeatureIconV2 name="MetaBusiness" />,
      title: "Meta Business Suite",
      directIcon: <FeatureIconV4 name="ArrowTopRight" />,
    },
    {
      logoIcon: <FeatureIconV3 name="SettingAndPrivacy" />,
      title: "Setting & Privacy",
      directIcon: <FeatureIconV5 name="ArrowRight" />,
      children: {
        title: "Setting & Privacy",
        data: [
          {
            title: "Settings",
            logoIcon: <FeatureIconV3 name="SettingAndPrivacy" />,
          },
          {
            title: "Language",
            logoIcon: <FeatureIconV5 name="Global" size="size-5" />,
            directIcon: <FeatureIconV5 name="ArrowRight" />,
            children: {
              title: "Language",
              data: [
                {
                  title: "Language on Facebook",
                  logoIcon: <FeatureIconV1 name="GlobalPencil" size="size-5" />,
                  directIcon: <FeatureIconV5 name="ArrowRight" />,
                  content: "English (UK)",
                  children: {
                    title: "Language on Facebook",
                    search: true,
                    data: [
                      {
                        title: "English (UK)",
                        content: "English (UK)",
                      },
                      {
                        title: "Tiếng Việt",
                        content: "Tiếng Việt",
                      },
                    ],
                  },
                },
                {
                  title: "See all Settings",
                  logoIcon: <FeatureIconV3 name="SettingAndPrivacy" />,
                },
              ],
            },
          },
          {
            title: "Check Privacy",
            logoIcon: <FeatureIconV1 name="CheckPrivacy" />,
          },
          {
            title: "Privacy Center",
            logoIcon: <FeatureIconV6 name="PrivacyCenter" />,
          },
          {
            title: "All Activities",
            logoIcon: <FeatureIconV7 name="AllActivities" />,
          },
          {
            title: "Feeds",
            logoIcon: <FeatureIconV1 name="Feeds" />,
          },
        ],
      },
    },
    {
      logoIcon: <FeatureIconV1 name="HelpAndSupport" />,
      title: "Help & Support",
      directIcon: <FeatureIconV5 name="ArrowRight" />,
      children: {
        title: "Help & Support",
        data: [
          {
            title: "Help Center",
            logoIcon: <FeatureIconV1 name="HelpAndSupport" />,
          },
          {
            title: "Community",
            logoIcon: <FeatureIconV7 name="MessageSupport" />,
          },
          {
            title: "Contact Us",
            logoIcon: <FeatureIconV7 name="Reports" />,
          },
        ],
      },
    },
    {
      logoIcon: <FeatureIconV2 name="ScreenAndAssistant" />,
      title: "Screen & Assistant",
      directIcon: <FeatureIconV5 name="ArrowRight" />,
      children: {
        title: "Screen & Assistant",
        data: [
          {
            title: "Dark Mode",
            content:
              "Adjust Facebook's look and feel to reduce glare and give your eyes a break.",
            logoIcon: <FeatureIconV6 name="DarkMode" />,
            radio: [
              { title: "Turn on" },
              { title: "Turn off" },
              {
                title: "Auto",
                content:
                  "We will automatically adjust the screen according to the system settings on your device.",
              },
            ],
          },
          {
            title: "Collapse Mode",
            content:
              "Reduce the font size for more content that fits on the screen.",
            logoIcon: <FeatureIconV1 name="CollapseMode" />,
            radio: [{ title: "Turn on" }, { title: "Turn off" }],
          },
          {
            title: "Show Link Preview",
            logoIcon: <FeatureIconV5 name="MousePointer" size="size-5" />,
            content:
              "Show information and actions in the preview window without opening the page to a person, event, or group.",
            radio: [
              { title: "Show a preview when hovering over a link" },
              {
                title: "Show a preview after focusing a link",
                content:
                  "Best suited when using a screen reader or magnifying glass. The link changes to a button to open the preview window",
              },
            ],
          },
          {
            title: "Keyboard",
            logoIcon: <FeatureIconV1 name="KeyBoard" size="size-5" />,
            directIcon: <FeatureIconV5 name="ArrowRight" />,
            children: {
              title: "Keyboard",
              data: [
                {
                  title: "See all Keyboard shortcuts",
                  logoIcon: <FeatureIconV1 name="KeyBoard" size="size-5" />,
                },
                {
                  title: "Use shortcuts with one character",
                  logoIcon: <FeatureIconV7 name="Star" size="size-5" />,
                  content:
                    "Use single-character shortcuts to perform common actions.",
                  radio: [{ title: "Turn on" }, { title: "Turn off" }],
                },
              ],
            },
          },
        ],
      },
    },
    {
      logoIcon: <FeatureIconV1 name="Contribution" />,
      title: "Contribution",
    },
    {
      logoIcon: <FeatureIconV2 name="LogOut" />,
      title: "Log Out",
    },
  ],
};
