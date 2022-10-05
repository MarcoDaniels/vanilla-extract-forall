module Main exposing (..)

import Browser
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html


type alias Model =
    { withTheme : Bool
    , classNames : ClassNames
    }


type alias ClassNames =
    { themeElm : String
    , wrapper : String
    , brand : String
    , button : String
    }


type Msg
    = SetTheme Bool


main : Program ClassNames Model Msg
main =
    Browser.element
        { init = \initClassNames -> ( { withTheme = True, classNames = initClassNames }, Cmd.none )
        , view =
            \model ->
                Html.div
                    [ Html.classList
                        [ ( model.classNames.themeElm, model.withTheme )
                        , ( model.classNames.wrapper, True )
                        ]
                    ]
                    [ Html.h2 [ Html.class model.classNames.brand ] [ Html.text "elm" ]
                    , Html.button
                        [ Html.class model.classNames.button
                        , Html.onClick (SetTheme (not model.withTheme))
                        ]
                        [ Html.text
                            (if model.withTheme then
                                "with theme"

                             else
                                "without theme"
                            )
                        ]
                    ]
        , update =
            \msg model ->
                case msg of
                    SetTheme theme ->
                        ( { model | withTheme = theme }, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }
