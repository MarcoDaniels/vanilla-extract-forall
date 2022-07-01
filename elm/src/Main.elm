module Main exposing (..)

import Browser
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html


type alias Model =
    { danger : Bool, classNames : ClassNames }


type alias ClassNames =
    { theme : String
    , danger : String
    , okay : String
    }


type Msg
    = SetDanger Bool


main : Program ClassNames Model Msg
main =
    Browser.document
        { init = \initClassNames -> ( { danger = True, classNames = initClassNames }, Cmd.none )
        , view =
            \model ->
                { title = "elm-vite template"
                , body =
                    [ Html.div [ Html.class model.classNames.theme ]
                        [ Html.button
                            [ Html.classList
                                [ ( model.classNames.danger, model.danger )
                                , ( model.classNames.okay, not model.danger )
                                ]
                            , Html.onClick (SetDanger (not model.danger))
                            ]
                            [ Html.text
                                (if model.danger then
                                    "I'm in danger"

                                 else
                                    "I'm okay"
                                )
                            ]
                        ]
                    ]
                }
        , update =
            \msg model ->
                case msg of
                    SetDanger danger ->
                        ( { model | danger = danger }, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }
