import React from "react";
import "./PdfDfaContainer.css";
import DFALogic from "./DFALogic";

const PdaDfaContainer = ({ showCfg }) => {
  const dfa1Div = (
    <div id="DFA1">
      <svg
        id="DFA1"
        viewBox="0 0 627 474"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Labels" className="labels">
          <text
            id="T"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="226" y="193.864">
              T
            </tspan>
          </text>
          <text
            id="N5"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="149" y="265.864">
              N5
            </tspan>
          </text>
          <text
            id="N6"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="149" y="338.864">
              N6
            </tspan>
          </text>
          <text
            id="N7"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="76" y="411.864">
              N7
            </tspan>
          </text>
          <text
            id="N8"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="149" y="411.864">
              N8
            </tspan>
          </text>
          <text
            id="N9"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="222" y="411.864">
              N9
            </tspan>
          </text>
          <text
            id="N10"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="345" y="189.864">
              N10
            </tspan>
          </text>
          <text
            id="N11"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="419" y="189.864">
              N11
            </tspan>
          </text>
          <text
            id="N12"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="477" y="154.271">
              N12
            </tspan>
          </text>
          <text
            id="N13"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="477" y="225.864">
              N13
            </tspan>
          </text>
          <text
            id="N3"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="149" y="119.864">
              N3
            </tspan>
          </text>
          <text
            id="N4"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="149" y="46.8636">
              N4
            </tspan>
          </text>
          <text
            id="-"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="24"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="78" y="197.227">
              -
            </tspan>
          </text>
          <text
            id="+"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="24"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="552" y="158.227">
              +
            </tspan>
          </text>
          <text
            id="+_2"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="24"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="552" y="230.227">
              +
            </tspan>
          </text>
          <text
            id="a"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="114" y="181.864">
              a
            </tspan>
          </text>
          <text
            id="a_2"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="143" y="224.864">
              a
            </tspan>
          </text>
          <text
            id="a_3"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="194" y="235.864">
              a
            </tspan>
          </text>
          <text
            id="a_4"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="114" y="399.864">
              a
            </tspan>
          </text>
          <text
            id="a_5"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="262" y="349.864">
              a
            </tspan>
          </text>
          <text
            id="a_6"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="241" y="281.864">
              a
            </tspan>
          </text>
          <text
            id="a_7"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="502" y="189.864">
              a
            </tspan>
          </text>
          <text
            id="a_8"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="445" y="225.864">
              a
            </tspan>
          </text>
          <text
            id="a_9"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="520" y="233.864">
              a
            </tspan>
          </text>
          <text
            id="a_10"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="532" y="171.864">
              a
            </tspan>
          </text>
          <text
            id="a_11"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="557" y="276.864">
              a
            </tspan>
          </text>
          <text
            id="a_12"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="301" y="399.864">
              a
            </tspan>
          </text>
          <text
            id="a_13"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="143" y="83.8636">
              a
            </tspan>
          </text>
          <text
            id="a_14"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="208" y="103.864">
              a
            </tspan>
          </text>
          <text
            id="a, b"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="254" y="170.864">
              a, b
            </tspan>
          </text>
          <text
            id="a, b_2"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="383" y="170.864">
              a, b
            </tspan>
          </text>
          <text
            id="b"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="143" y="158.864">
              b
            </tspan>
          </text>
          <text
            id="b_2"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="193" y="149.864">
              b
            </tspan>
          </text>
          <text
            id="b_3"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="265" y="38.8636">
              b
            </tspan>
          </text>
          <text
            id="b_4"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="465" y="189.864">
              b
            </tspan>
          </text>
          <text
            id="b_5"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="445" y="154.864">
              b
            </tspan>
          </text>
          <text
            id="b_6"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="520" y="143.864">
              b
            </tspan>
          </text>
          <text
            id="b_7"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="532" y="207.864">
              b
            </tspan>
          </text>
          <text
            id="b_8"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="557" y="100.864">
              b
            </tspan>
          </text>
          <text
            id="b_9"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="143" y="299.864">
              b
            </tspan>
          </text>
          <text
            id="b_10"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="90" y="284.864">
              b
            </tspan>
          </text>
          <text
            id="b_11"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="208" y="280.864">
              b
            </tspan>
          </text>
          <text
            id="b_12"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="187" y="399.864">
              b
            </tspan>
          </text>
          <text
            id="b_13"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="154" y="445.864">
              b
            </tspan>
          </text>
          <text
            id="b_14"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="31" y="284.864">
              b
            </tspan>
          </text>
          <text
            id="N2"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            font-family="Microsoft Sans Serif"
            font-size="12"
            letter-spacing="0em"
          >
            <tspan x="150" y="193.864">
              N2
            </tspan>
          </text>
        </g>

        <g id="Arrows">
          <path
            id="Arrow 11"
            d="M157 138L151.226 148H162.774L157 138ZM158 166V147H156V166H158Z"
            fill="white"
          />
          <path
            id="Arrow 23"
            d="M135 189L125 183.226V194.774L135 189ZM107 190H126V188H107V190Z"
            fill="white"
          />
          <path
            id="Arrow 25"
            d="M135 408L125 402.226V413.774L135 408ZM107 409H126V407H107V409Z"
            fill="white"
          />
          <path
            id="Arrow 21"
            d="M157 239L162.774 229H151.226L157 239ZM156 211V230H158V211H156Z"
            fill="white"
          />
          <path
            id="Arrow 32"
            d="M408 186L398 180.226V191.774L408 186ZM380 187H399V185H380V187Z"
            fill="white"
          />
          <path
            id="Arrow 35"
            d="M464.799 151L453.645 153.989L461.81 162.154L464.799 151ZM445.707 171.506L459.142 158.071L457.728 156.657L444.293 170.092L445.707 171.506Z"
            fill="white"
          />
          <path
            id="Arrow 37"
            d="M504.824 207.528L515.977 204.539L507.812 196.374L504.824 207.528ZM511.895 201.871L546.884 166.882L545.469 165.468L510.48 200.457L511.895 201.871Z"
            fill="white"
          />
          <path
            id="Arrow 38"
            d="M505 164L507.989 175.154L516.154 166.989L505 164ZM510.657 171.071L545.646 206.06L547.06 204.646L512.071 169.657L510.657 171.071Z"
            fill="white"
          />
          <path
            id="Arrow 36"
            d="M464.799 221.799L461.81 210.645L453.645 218.81L464.799 221.799ZM444.293 202.707L457.728 216.142L459.142 214.728L445.707 201.293L444.293 202.707Z"
            fill="white"
          />
          <path
            id="Arrow 33"
            d="M538 151L528 145.226V156.774L538 151ZM510 152H529V150H510V152Z"
            fill="white"
          />
          <path
            id="Arrow 22"
            d="M157 312L162.774 302H151.226L157 312ZM156 284V303H158V284H156Z"
            fill="white"
          />
          <path
            id="Arrow 28"
            d="M230 211L220.857 218.052L231.536 222.444L230 211ZM179.925 335.38L227.501 219.704L225.652 218.943L178.075 334.62L179.925 335.38Z"
            fill="white"
          />
          <path
            id="Arrow 31"
            d="M208 189L198.942 196.162L209.674 200.425L208 189ZM179.929 262.369L205.607 197.733L203.748 196.995L178.071 261.631L179.929 262.369Z"
            fill="white"
          />
          <path
            id="Arrow 29"
            d="M230 166L231.503 154.551L220.837 158.974L230 166ZM178.076 43.383L225.629 158.069L227.477 157.303L179.924 42.617L178.076 43.383Z"
            fill="white"
          />
          <path
            id="Arrow 30"
            d="M208 189L209.674 177.575L198.942 181.838L208 189ZM178.071 116.369L203.748 181.005L205.607 180.267L179.929 115.631L178.071 116.369Z"
            fill="white"
          />
          <path
            id="Arrow 24"
            d="M84 385L89.7735 375H78.2265L84 385ZM83 211L83 376H85L85 211H83Z"
            fill="white"
          />
          <path
            id="Arrow 26"
            d="M208 408L198 402.226V413.774L208 408ZM180 409H199V407H180V409Z"
            fill="white"
          />
          <path
            id="Arrow 34"
            d="M538 222L528 216.226V227.774L538 222ZM510 223H529V221H510V223Z"
            fill="white"
          />
          <path
            id="Arrow 20"
            d="M157 65L151.226 75H162.774L157 65ZM158 93V74H156V93H158Z"
            fill="white"
          />
          <path
            id="Rectangle 1"
            d="M136.5 116L126.5 110.226V121.774L136.5 116ZM59 117H127.5V115H59V117ZM46 394V130H44V394H46ZM64 407H59V409H64V407ZM44 394C44 402.284 50.7157 409 59 409V407C51.8203 407 46 401.18 46 394H44ZM59 115C50.7157 115 44 121.716 44 130H46C46 122.82 51.8203 117 59 117V115Z"
            fill="white"
          />
          <path
            id="Rectangle 2"
            d="M84 430L78.2265 440H89.7735L84 430ZM85 440V439H83V440H85ZM216 453H98V455H216V453ZM229 430V440H231V430H229ZM216 455C224.284 455 231 448.284 231 440H229C229 447.18 223.18 453 216 453V455ZM83 440C83 448.284 89.7157 455 98 455V453C90.8203 453 85 447.18 85 440H83Z"
            fill="white"
          />
          <path
            id="Vector 1"
            d="M335 186L325 180.226V191.774L335 186ZM180 336H296.271V334H180V336ZM316.271 187H326V185H316.271V187ZM307.271 325V253.727H305.271V325H307.271ZM307.271 253.727V196H305.271V253.727H307.271ZM316.271 185C310.196 185 305.271 189.925 305.271 196H307.271C307.271 191.029 311.3 187 316.271 187V185ZM296.271 336C302.346 336 307.271 331.075 307.271 325H305.271C305.271 329.971 301.242 334 296.271 334V336Z"
            fill="white"
          />
          <path
            id="Vector 4"
            d="M236.5 211.5L230.726 221.5H242.274L236.5 211.5ZM159.25 387.661L234.752 301.995L233.252 300.673L157.75 386.339L159.25 387.661ZM237.5 294.722V220.5H235.5V294.722H237.5ZM234.752 301.995C236.523 299.986 237.5 297.4 237.5 294.722H235.5C235.5 296.913 234.701 299.029 233.252 300.673L234.752 301.995Z"
            fill="white"
          />
          <path
            id="Vector 2"
            d="M357 164L362.773 154H351.226L357 164ZM179 46H347V44H179V46ZM356 55V155H358V55H356ZM347 46C351.971 46 356 50.0294 356 55H358C358 48.9249 353.075 44 347 44V46Z"
            fill="white"
          />
          <path
            id="Vector 3"
            d="M357 208L362.774 218H351.226L357 208ZM253 407H347V409H253V407ZM356 398V217H358V398H356ZM347 407C351.971 407 356 402.971 356 398H358C358 404.075 353.075 409 347 409V407Z"
            fill="white"
          />
          <path
            id="Ellipse 1"
            d="M253.06 193.391L255.496 204.678L264.053 196.926L253.06 193.391ZM277.11 188.613L276.11 188.612L277.11 188.613ZM274.274 180.682L273.501 181.316L274.274 180.682ZM258.243 200.514C260.998 201.987 264.177 202.46 267.241 201.851L266.851 199.889C264.241 200.408 261.533 200.006 259.187 198.751L258.243 200.514ZM267.241 201.851C270.304 201.242 273.062 199.59 275.044 197.177L273.498 195.907C271.81 197.964 269.46 199.371 266.851 199.889L267.241 201.851ZM275.044 197.177C277.026 194.763 278.109 191.736 278.11 188.613L276.11 188.612C276.109 191.273 275.186 193.851 273.498 195.907L275.044 197.177ZM278.11 188.613C278.111 185.49 277.028 182.463 275.047 180.048L273.501 181.316C275.188 183.373 276.11 185.952 276.11 188.612L278.11 188.613ZM275.047 180.048C273.067 177.633 270.31 175.98 267.246 175.37L266.856 177.331C269.465 177.851 271.814 179.259 273.501 181.316L275.047 180.048ZM267.246 175.37C264.183 174.76 261.003 175.231 258.249 176.703L259.191 178.467C261.538 177.213 264.247 176.812 266.856 177.331L267.246 175.37ZM258.249 176.703C255.494 178.174 253.334 180.556 252.139 183.441L253.986 184.207C255.005 181.749 256.844 179.72 259.191 178.467L258.249 176.703Z"
            fill="white"
          />
          <path
            id="Ellipse 2"
            d="M566.451 128.764L577.482 125.351L569.01 117.505L566.451 128.764ZM559.586 105.225L559.674 106.222L559.586 105.225ZM551.935 108.744L552.634 109.459L551.935 108.744ZM573.094 122.978C574.32 120.105 574.512 116.897 573.638 113.898L571.718 114.458C572.463 117.012 572.299 119.746 571.254 122.193L573.094 122.978ZM573.638 113.898C572.763 110.9 570.876 108.297 568.298 106.534L567.169 108.185C569.365 109.687 570.973 111.904 571.718 114.458L573.638 113.898ZM568.298 106.534C565.72 104.771 562.611 103.957 559.499 104.229L559.674 106.222C562.324 105.989 564.973 106.683 567.169 108.185L568.298 106.534ZM559.499 104.229C556.388 104.502 553.467 105.845 551.235 108.029L552.634 109.459C554.535 107.598 557.023 106.454 559.674 106.222L559.499 104.229ZM551.235 108.029C549.003 110.214 547.597 113.105 547.258 116.21L549.246 116.427C549.535 113.782 550.733 111.32 552.634 109.459L551.235 108.029ZM547.258 116.21C546.918 119.315 547.666 122.441 549.373 125.057L551.048 123.963C549.593 121.735 548.957 119.072 549.246 116.427L547.258 116.21ZM549.373 125.057C551.08 127.672 553.641 129.615 556.62 130.553L557.221 128.646C554.684 127.846 552.502 126.191 551.048 123.963L549.373 125.057Z"
            fill="white"
          />
          <path
            id="Ellipse 3"
            d="M554.904 243.591L543.873 247.005L552.345 254.851L554.904 243.591ZM561.769 267.13L561.682 266.134L561.769 267.13ZM569.421 263.611L568.721 262.896L569.421 263.611ZM548.262 249.377C547.035 252.25 546.843 255.459 547.718 258.457L549.638 257.897C548.893 255.343 549.056 252.61 550.101 250.163L548.262 249.377ZM547.718 258.457C548.592 261.456 550.479 264.058 553.057 265.821L554.186 264.17C551.99 262.668 550.382 260.451 549.638 257.897L547.718 258.457ZM553.057 265.821C555.635 267.584 558.745 268.399 561.856 268.126L561.682 266.134C559.031 266.366 556.382 265.672 554.186 264.17L553.057 265.821ZM561.856 268.126C564.968 267.853 567.888 266.51 570.12 264.326L568.721 262.896C566.82 264.757 564.332 265.902 561.682 266.134L561.856 268.126ZM570.12 264.326C572.352 262.141 573.758 259.25 574.098 256.145L572.109 255.928C571.82 258.573 570.623 261.036 568.721 262.896L570.12 264.326ZM574.098 256.145C574.437 253.041 573.69 249.914 571.983 247.299L570.308 248.392C571.762 250.62 572.399 253.283 572.109 255.928L574.098 256.145ZM571.983 247.299C570.275 244.683 567.714 242.741 564.735 241.802L564.134 243.709C566.672 244.509 568.854 246.164 570.308 248.392L571.983 247.299Z"
            fill="white"
          />
          <path
            id="Ellipse 4"
            d="M478.922 194.324L478.137 194.943H478.137L478.922 194.324ZM478.405 178.126L479.229 178.693L478.405 178.126ZM485.17 173L473.713 174.437L480.686 183.641L485.17 173ZM486.259 198.034C483.673 197.34 481.375 195.822 479.708 193.705L478.137 194.943C480.069 197.397 482.735 199.159 485.741 199.966L486.259 198.034ZM479.708 193.705C478.041 191.588 477.093 188.984 477.006 186.279L475.007 186.343C475.107 189.473 476.204 192.489 478.137 194.943L479.708 193.705ZM477.006 186.279C476.92 183.574 477.7 180.914 479.229 178.693L477.582 177.559C475.81 180.133 474.908 183.213 475.007 186.343L477.006 186.279Z"
            fill="white"
          />
          <path
            id="Ellipse 5"
            d="M496.078 177.676L496.863 177.057H496.863L496.078 177.676ZM496.595 193.874L495.771 193.307L496.595 193.874ZM489.83 199L501.287 197.563L494.314 188.359L489.83 199ZM488.741 173.966C491.327 174.66 493.625 176.178 495.292 178.295L496.863 177.057C494.931 174.603 492.265 172.841 489.259 172.034L488.741 173.966ZM495.292 178.295C496.959 180.412 497.907 183.016 497.994 185.721L499.993 185.657C499.893 182.527 498.796 179.511 496.863 177.057L495.292 178.295ZM497.994 185.721C498.08 188.426 497.3 191.086 495.771 193.307L497.418 194.441C499.19 191.867 500.092 188.787 499.993 185.657L497.994 185.721Z"
            fill="white"
          />
        </g>

        <g id="Nodes">
          <circle
            id="trapNode"
            cx="230.5"
            cy="188.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="endNode2Let"
            cx="560.5"
            cy="221.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="endNode1Let"
            cx="560.5"
            cy="150.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node13Let"
            cx="487.5"
            cy="221.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node12Let"
            cx="487.5"
            cy="150.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node11Let"
            cx="430.5"
            cy="185.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node10Let"
            cx="357.5"
            cy="185.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node9Let"
            cx="230.5"
            cy="407.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node8Let"
            cx="157.5"
            cy="407.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node7Let"
            cx="84.5"
            cy="407.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node6Let"
            cx="157.5"
            cy="334.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node5Let"
            cx="157.5"
            cy="261.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node4Let"
            cx="157.5"
            cy="42.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node3Let"
            cx="157.5"
            cy="115.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node2Let"
            cx="157.5"
            cy="188.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="startNodeLet"
            cx="84.5"
            cy="188.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
        </g>
      </svg>
    </div>
  );

  const dfa2Div = (
    <div id="DFA2">
      <svg viewBox="0 0 447 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Nodes">
          <circle
            id="endNodeNum"
            cx="412.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node8Num"
            cx="340.5"
            cy="35.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node7Num"
            cx="340.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node6Num"
            cx="268.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node5Num"
            cx="196.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node4Num"
            cx="124.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node3Num"
            cx="79.5"
            cy="148.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="node2Num"
            cx="79.5"
            cy="58.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
          <circle
            id="startNodeNum"
            cx="34.5"
            cy="103.5"
            r="21"
            stroke="white"
            stroke-width="3"
          />
        </g>

        <g id="Arrows">
          <path
            id="Arrow 7"
            d="M62.0623 70.9377L50.9087 73.9263L59.0737 82.0913L62.0623 70.9377ZM46.6449 87.7694L56.4054 78.0088L54.9912 76.5946L45.2306 86.3551L46.6449 87.7694Z"
            fill="white"
          />
          <path
            id="Arrow 16"
            d="M324.055 50.0077L312.901 52.9963L321.066 61.1613L324.055 50.0077ZM284.653 90.8239L318.398 57.0788L316.983 55.6646L283.238 89.4097L284.653 90.8239Z"
            fill="white"
          />
          <path
            id="Arrow 17"
            d="M396.109 90.1091L393.121 78.9555L384.956 87.1205L396.109 90.1091ZM355.293 50.7071L389.038 84.4522L390.452 83.038L356.707 49.2929L355.293 50.7071Z"
            fill="white"
          />
          <path
            id="Arrow 8"
            d="M107.125 116L95.971 118.989L104.136 127.154L107.125 116ZM91.7071 132.832L101.468 123.071L100.053 121.657L90.2929 131.417L91.7071 132.832Z"
            fill="white"
          />
          <path
            id="Arrow 9"
            d="M68.1245 129.125L65.1359 117.971L56.971 126.136L68.1245 129.125ZM51.2929 113.707L61.0534 123.468L62.4677 122.053L52.7071 112.293L51.2929 113.707Z"
            fill="white"
          />
          <path
            id="Arrow 10"
            d="M113.125 85.1245L110.136 73.971L101.971 82.1359L113.125 85.1245ZM96.2929 69.7071L106.053 79.4677L107.468 78.0534L97.7071 68.2929L96.2929 69.7071Z"
            fill="white"
          />
          <path
            id="Arrow 20"
            d="M74 127L75.2719 115.523L64.6968 120.16L74 127ZM73.1101 78.5439C68.8189 86.9165 66.5755 93.6894 66.0832 100.084C65.5898 106.492 66.8614 112.431 69.454 119.12L71.3188 118.397C68.7944 111.884 67.614 106.254 68.0773 100.237C68.5415 94.2078 70.6634 87.7025 74.8899 79.4561L73.1101 78.5439Z"
            fill="white"
          />
          <path
            id="Arrow 21"
            d="M85 79L82.6447 90.3042L93.6121 86.6919L85 79ZM85.9086 127.418C89.2847 120.074 91.14 113.849 91.5711 107.525C92.0023 101.202 91.0047 94.8519 88.7753 87.2672L86.8565 87.8312C89.0465 95.2817 89.9853 101.382 89.5758 107.389C89.1663 113.394 87.404 119.377 84.0914 126.582L85.9086 127.418Z"
            fill="white"
          />
          <path
            id="Arrow 11"
            d="M174 104L164 98.2265V109.774L174 104ZM146 105H165V103H146V105Z"
            fill="white"
          />
          <path
            id="Arrow 13"
            d="M318 104L308 98.2265V109.774L318 104ZM290 105H309V103H290V105Z"
            fill="white"
          />
          <path
            id="Arrow 15"
            d="M340 82L345.774 72H334.226L340 82ZM339 58V73H341V58H339Z"
            fill="white"
          />
          <path
            id="Arrow 14"
            d="M390 104L380 98.2265V109.774L390 104ZM362 105H381V103H362V105Z"
            fill="white"
          />
          <path
            id="Arrow 12"
            d="M246 104L236 98.2265V109.774L246 104ZM218 105H237V103H218V105Z"
            fill="white"
          />
          <path
            id="Arrow 18"
            d="M211.5 119.5L215.987 130.14L222.958 120.934L211.5 119.5ZM218.259 125.843C228.155 130.396 246.945 135.689 267.924 136.901C288.9 138.112 312.209 135.252 331.035 123.345L329.965 121.655C311.632 133.251 288.8 136.103 268.04 134.904C247.282 133.705 228.74 128.464 219.095 124.026L218.259 125.843Z"
            fill="white"
          />
          <path
            id="Arrow 19"
            d="M211 87.4999L221.712 83.1887L212.622 76.0675L211 87.4999ZM183.301 85.9016C176.555 76.8691 176.587 70.5678 179.459 66.5021C182.432 62.2933 188.756 59.9733 195.672 59.6812C202.561 59.3903 209.651 61.1342 213.934 64.6048C216.056 66.3238 217.456 68.4351 217.869 70.9161C218.283 73.4006 217.731 76.3944 215.683 79.9167L217.412 80.9219C219.628 77.1108 220.352 73.6465 219.842 70.5874C219.332 67.5248 217.608 65.0071 215.193 63.0508C210.404 59.1709 202.772 57.3796 195.587 57.683C188.429 57.9853 181.329 60.3892 177.826 65.3482C174.221 70.4504 174.725 77.7608 181.699 87.0984L183.301 85.9016Z"
            fill="white"
          />
          <path
            id="Arrow 22"
            d="M397.961 119.297L387.242 123.593L396.322 130.727L397.961 119.297ZM425.657 120.936C432.39 129.978 432.349 136.279 429.471 140.341C426.492 144.545 420.164 146.856 413.249 147.138C406.359 147.419 399.272 145.665 394.993 142.188C392.874 140.466 391.477 138.353 391.068 135.871C390.657 133.386 391.214 130.393 393.267 126.874L391.539 125.866C389.318 129.674 388.589 133.137 389.094 136.197C389.6 139.26 391.32 141.78 393.732 143.74C398.515 147.627 406.145 149.429 413.33 149.136C420.489 148.844 427.593 146.451 431.103 141.497C434.714 136.4 434.221 129.089 427.261 119.741L425.657 120.936Z"
            fill="white"
          />
        </g>

        <g id="Arrow Labels">
          <path
            id="1"
            d="M46.9716 70.2727V79H45.9148V71.3807H45.8636L43.733 72.7955V71.7216L45.9148 70.2727H46.9716Z"
            fill="white"
          />
          <path
            id="0"
            d="M62.75 104.119C62.108 104.119 61.5611 103.945 61.1094 103.595C60.6577 103.243 60.3125 102.733 60.0739 102.065C59.8352 101.395 59.7159 100.585 59.7159 99.6364C59.7159 98.6932 59.8352 97.8878 60.0739 97.2202C60.3153 96.5497 60.6619 96.0384 61.1136 95.6861C61.5682 95.331 62.1136 95.1534 62.75 95.1534C63.3864 95.1534 63.9304 95.331 64.3821 95.6861C64.8366 96.0384 65.1832 96.5497 65.4219 97.2202C65.6634 97.8878 65.7841 98.6932 65.7841 99.6364C65.7841 100.585 65.6648 101.395 65.4261 102.065C65.1875 102.733 64.8423 103.243 64.3906 103.595C63.9389 103.945 63.392 104.119 62.75 104.119ZM62.75 103.182C63.3864 103.182 63.8807 102.875 64.233 102.261C64.5852 101.648 64.7614 100.773 64.7614 99.6364C64.7614 98.8807 64.6804 98.2372 64.5185 97.706C64.3594 97.1747 64.1293 96.7699 63.8281 96.4915C63.5298 96.2131 63.1705 96.0739 62.75 96.0739C62.1193 96.0739 61.6264 96.3849 61.2713 97.0071C60.9162 97.6264 60.7386 98.5028 60.7386 99.6364C60.7386 100.392 60.8182 101.034 60.9773 101.562C61.1364 102.091 61.3651 102.493 61.6634 102.768C61.9645 103.044 62.3267 103.182 62.75 103.182Z"
            fill="white"
          />
          <path
            id="1_2"
            d="M116.972 67.2727V76H115.915V68.3807H115.864L113.733 69.7955V68.7216L115.915 67.2727H116.972Z"
            fill="white"
          />
          <path
            id="1_3"
            d="M232.972 87.2727V96H231.915V88.3807H231.864L229.733 89.7955V88.7216L231.915 87.2727H232.972Z"
            fill="white"
          />
          <path
            id="1_4"
            d="M294.972 62.2727V71H293.915V63.3807H293.864L291.733 64.7955V63.7216L293.915 62.2727H294.972Z"
            fill="white"
          />
          <path
            id="1_5"
            d="M371.972 108.273V117H370.915V109.381H370.864L368.733 110.795V109.722L370.915 108.273H371.972Z"
            fill="white"
          />
          <path
            id="1_6"
            d="M393.972 61.2727V70H392.915V62.3807H392.864L390.733 63.7955V62.7216L392.915 61.2727H393.972Z"
            fill="white"
          />
          <path
            id="1, 0"
            d="M153.972 87.2727V96H152.915V88.3807H152.864L150.733 89.7955V88.7216L152.915 87.2727H153.972ZM157.483 94.8068L157.415 95.267C157.366 95.5909 157.293 95.9375 157.193 96.3068C157.097 96.6761 156.996 97.0241 156.891 97.3509C156.786 97.6776 156.699 97.9375 156.631 98.1307H155.864C155.901 97.9489 155.949 97.7088 156.009 97.4105C156.068 97.1122 156.128 96.7784 156.188 96.4091C156.25 96.0426 156.301 95.6676 156.341 95.2841L156.392 94.8068H157.483ZM165.551 96.1193C164.909 96.1193 164.362 95.9446 163.91 95.5952C163.458 95.2429 163.113 94.733 162.875 94.0653C162.636 93.3949 162.517 92.5852 162.517 91.6364C162.517 90.6932 162.636 89.8878 162.875 89.2202C163.116 88.5497 163.463 88.0384 163.914 87.6861C164.369 87.331 164.914 87.1534 165.551 87.1534C166.187 87.1534 166.731 87.331 167.183 87.6861C167.637 88.0384 167.984 88.5497 168.223 89.2202C168.464 89.8878 168.585 90.6932 168.585 91.6364C168.585 92.5852 168.466 93.3949 168.227 94.0653C167.988 94.733 167.643 95.2429 167.191 95.5952C166.74 95.9446 166.193 96.1193 165.551 96.1193ZM165.551 95.1818C166.187 95.1818 166.681 94.875 167.034 94.2614C167.386 93.6477 167.562 92.7727 167.562 91.6364C167.562 90.8807 167.481 90.2372 167.319 89.706C167.16 89.1747 166.93 88.7699 166.629 88.4915C166.331 88.2131 165.971 88.0739 165.551 88.0739C164.92 88.0739 164.427 88.3849 164.072 89.0071C163.717 89.6264 163.539 90.5028 163.539 91.6364C163.539 92.392 163.619 93.0341 163.778 93.5625C163.937 94.0909 164.166 94.4929 164.464 94.7685C164.765 95.044 165.127 95.1818 165.551 95.1818Z"
            fill="white"
          />
          <path
            id="1, 0_2"
            d="M404.972 152.273V161H403.915V153.381H403.864L401.733 154.795V153.722L403.915 152.273H404.972ZM408.483 159.807L408.415 160.267C408.366 160.591 408.293 160.938 408.193 161.307C408.097 161.676 407.996 162.024 407.891 162.351C407.786 162.678 407.699 162.938 407.631 163.131H406.864C406.901 162.949 406.949 162.709 407.009 162.411C407.068 162.112 407.128 161.778 407.188 161.409C407.25 161.043 407.301 160.668 407.341 160.284L407.392 159.807H408.483ZM416.551 161.119C415.909 161.119 415.362 160.945 414.91 160.595C414.458 160.243 414.113 159.733 413.875 159.065C413.636 158.395 413.517 157.585 413.517 156.636C413.517 155.693 413.636 154.888 413.875 154.22C414.116 153.55 414.463 153.038 414.914 152.686C415.369 152.331 415.914 152.153 416.551 152.153C417.187 152.153 417.731 152.331 418.183 152.686C418.637 153.038 418.984 153.55 419.223 154.22C419.464 154.888 419.585 155.693 419.585 156.636C419.585 157.585 419.466 158.395 419.227 159.065C418.988 159.733 418.643 160.243 418.191 160.595C417.74 160.945 417.193 161.119 416.551 161.119ZM416.551 160.182C417.187 160.182 417.681 159.875 418.034 159.261C418.386 158.648 418.562 157.773 418.562 156.636C418.562 155.881 418.481 155.237 418.319 154.706C418.16 154.175 417.93 153.77 417.629 153.491C417.331 153.213 416.971 153.074 416.551 153.074C415.92 153.074 415.427 153.385 415.072 154.007C414.717 154.626 414.539 155.503 414.539 156.636C414.539 157.392 414.619 158.034 414.778 158.562C414.937 159.091 415.166 159.493 415.464 159.768C415.765 160.044 416.127 160.182 416.551 160.182Z"
            fill="white"
          />
          <path
            id="0_2"
            d="M52.75 136.119C52.108 136.119 51.5611 135.945 51.1094 135.595C50.6577 135.243 50.3125 134.733 50.0739 134.065C49.8352 133.395 49.7159 132.585 49.7159 131.636C49.7159 130.693 49.8352 129.888 50.0739 129.22C50.3153 128.55 50.6619 128.038 51.1136 127.686C51.5682 127.331 52.1136 127.153 52.75 127.153C53.3864 127.153 53.9304 127.331 54.3821 127.686C54.8366 128.038 55.1832 128.55 55.4219 129.22C55.6634 129.888 55.7841 130.693 55.7841 131.636C55.7841 132.585 55.6648 133.395 55.4261 134.065C55.1875 134.733 54.8423 135.243 54.3906 135.595C53.9389 135.945 53.392 136.119 52.75 136.119ZM52.75 135.182C53.3864 135.182 53.8807 134.875 54.233 134.261C54.5852 133.648 54.7614 132.773 54.7614 131.636C54.7614 130.881 54.6804 130.237 54.5185 129.706C54.3594 129.175 54.1293 128.77 53.8281 128.491C53.5298 128.213 53.1705 128.074 52.75 128.074C52.1193 128.074 51.6264 128.385 51.2713 129.007C50.9162 129.626 50.7386 130.503 50.7386 131.636C50.7386 132.392 50.8182 133.034 50.9773 133.562C51.1364 134.091 51.3651 134.493 51.6634 134.768C51.9645 135.044 52.3267 135.182 52.75 135.182Z"
            fill="white"
          />
          <path
            id="0_3"
            d="M195.75 53.1193C195.108 53.1193 194.561 52.9446 194.109 52.5952C193.658 52.2429 193.313 51.733 193.074 51.0653C192.835 50.3949 192.716 49.5852 192.716 48.6364C192.716 47.6932 192.835 46.8878 193.074 46.2202C193.315 45.5497 193.662 45.0384 194.114 44.6861C194.568 44.331 195.114 44.1534 195.75 44.1534C196.386 44.1534 196.93 44.331 197.382 44.6861C197.837 45.0384 198.183 45.5497 198.422 46.2202C198.663 46.8878 198.784 47.6932 198.784 48.6364C198.784 49.5852 198.665 50.3949 198.426 51.0653C198.188 51.733 197.842 52.2429 197.391 52.5952C196.939 52.9446 196.392 53.1193 195.75 53.1193ZM195.75 52.1818C196.386 52.1818 196.881 51.875 197.233 51.2614C197.585 50.6477 197.761 49.7727 197.761 48.6364C197.761 47.8807 197.68 47.2372 197.518 46.706C197.359 46.1747 197.129 45.7699 196.828 45.4915C196.53 45.2131 196.17 45.0739 195.75 45.0739C195.119 45.0739 194.626 45.3849 194.271 46.0071C193.916 46.6264 193.739 47.5028 193.739 48.6364C193.739 49.392 193.818 50.0341 193.977 50.5625C194.136 51.0909 194.365 51.4929 194.663 51.7685C194.964 52.044 195.327 52.1818 195.75 52.1818Z"
            fill="white"
          />
          <path
            id="0_4"
            d="M270.75 148.119C270.108 148.119 269.561 147.945 269.109 147.595C268.658 147.243 268.313 146.733 268.074 146.065C267.835 145.395 267.716 144.585 267.716 143.636C267.716 142.693 267.835 141.888 268.074 141.22C268.315 140.55 268.662 140.038 269.114 139.686C269.568 139.331 270.114 139.153 270.75 139.153C271.386 139.153 271.93 139.331 272.382 139.686C272.837 140.038 273.183 140.55 273.422 141.22C273.663 141.888 273.784 142.693 273.784 143.636C273.784 144.585 273.665 145.395 273.426 146.065C273.188 146.733 272.842 147.243 272.391 147.595C271.939 147.945 271.392 148.119 270.75 148.119ZM270.75 147.182C271.386 147.182 271.881 146.875 272.233 146.261C272.585 145.648 272.761 144.773 272.761 143.636C272.761 142.881 272.68 142.237 272.518 141.706C272.359 141.175 272.129 140.77 271.828 140.491C271.53 140.213 271.17 140.074 270.75 140.074C270.119 140.074 269.626 140.385 269.271 141.007C268.916 141.626 268.739 142.503 268.739 143.636C268.739 144.392 268.818 145.034 268.977 145.562C269.136 146.091 269.365 146.493 269.663 146.768C269.964 147.044 270.327 147.182 270.75 147.182Z"
            fill="white"
          />
          <path
            id="0_5"
            d="M331.75 71.1193C331.108 71.1193 330.561 70.9446 330.109 70.5952C329.658 70.2429 329.313 69.733 329.074 69.0653C328.835 68.3949 328.716 67.5852 328.716 66.6364C328.716 65.6932 328.835 64.8878 329.074 64.2202C329.315 63.5497 329.662 63.0384 330.114 62.6861C330.568 62.331 331.114 62.1534 331.75 62.1534C332.386 62.1534 332.93 62.331 333.382 62.6861C333.837 63.0384 334.183 63.5497 334.422 64.2202C334.663 64.8878 334.784 65.6932 334.784 66.6364C334.784 67.5852 334.665 68.3949 334.426 69.0653C334.188 69.733 333.842 70.2429 333.391 70.5952C332.939 70.9446 332.392 71.1193 331.75 71.1193ZM331.75 70.1818C332.386 70.1818 332.881 69.875 333.233 69.2614C333.585 68.6477 333.761 67.7727 333.761 66.6364C333.761 65.8807 333.68 65.2372 333.518 64.706C333.359 64.1747 333.129 63.7699 332.828 63.4915C332.53 63.2131 332.17 63.0739 331.75 63.0739C331.119 63.0739 330.626 63.3849 330.271 64.0071C329.916 64.6264 329.739 65.5028 329.739 66.6364C329.739 67.392 329.818 68.0341 329.977 68.5625C330.136 69.0909 330.365 69.4929 330.663 69.7685C330.964 70.044 331.327 70.1818 331.75 70.1818Z"
            fill="white"
          />
          <path
            id="0_6"
            d="M303.75 94.1193C303.108 94.1193 302.561 93.9446 302.109 93.5952C301.658 93.2429 301.313 92.733 301.074 92.0653C300.835 91.3949 300.716 90.5852 300.716 89.6364C300.716 88.6932 300.835 87.8878 301.074 87.2202C301.315 86.5497 301.662 86.0384 302.114 85.6861C302.568 85.331 303.114 85.1534 303.75 85.1534C304.386 85.1534 304.93 85.331 305.382 85.6861C305.837 86.0384 306.183 86.5497 306.422 87.2202C306.663 87.8878 306.784 88.6932 306.784 89.6364C306.784 90.5852 306.665 91.3949 306.426 92.0653C306.188 92.733 305.842 93.2429 305.391 93.5952C304.939 93.9446 304.392 94.1193 303.75 94.1193ZM303.75 93.1818C304.386 93.1818 304.881 92.875 305.233 92.2614C305.585 91.6477 305.761 90.7727 305.761 89.6364C305.761 88.8807 305.68 88.2372 305.518 87.706C305.359 87.1747 305.129 86.7699 304.828 86.4915C304.53 86.2131 304.17 86.0739 303.75 86.0739C303.119 86.0739 302.626 86.3849 302.271 87.0071C301.916 87.6264 301.739 88.5028 301.739 89.6364C301.739 90.392 301.818 91.0341 301.977 91.5625C302.136 92.0909 302.365 92.4929 302.663 92.7685C302.964 93.044 303.327 93.1818 303.75 93.1818Z"
            fill="white"
          />
          <path
            id="1_7"
            d="M96.9716 95.2727V104H95.9148V96.3807H95.8636L93.733 97.7955V96.7216L95.9148 95.2727H96.9716Z"
            fill="white"
          />
          <path
            id="0_7"
            d="M108.75 136.119C108.108 136.119 107.561 135.945 107.109 135.595C106.658 135.243 106.313 134.733 106.074 134.065C105.835 133.395 105.716 132.585 105.716 131.636C105.716 130.693 105.835 129.888 106.074 129.22C106.315 128.55 106.662 128.038 107.114 127.686C107.568 127.331 108.114 127.153 108.75 127.153C109.386 127.153 109.93 127.331 110.382 127.686C110.837 128.038 111.183 128.55 111.422 129.22C111.663 129.888 111.784 130.693 111.784 131.636C111.784 132.585 111.665 133.395 111.426 134.065C111.188 134.733 110.842 135.243 110.391 135.595C109.939 135.945 109.392 136.119 108.75 136.119ZM108.75 135.182C109.386 135.182 109.881 134.875 110.233 134.261C110.585 133.648 110.761 132.773 110.761 131.636C110.761 130.881 110.68 130.237 110.518 129.706C110.359 129.175 110.129 128.77 109.828 128.491C109.53 128.213 109.17 128.074 108.75 128.074C108.119 128.074 107.626 128.385 107.271 129.007C106.916 129.626 106.739 130.503 106.739 131.636C106.739 132.392 106.818 133.034 106.977 133.562C107.136 134.091 107.365 134.493 107.663 134.768C107.964 135.044 108.327 135.182 108.75 135.182Z"
            fill="white"
          />
        </g>

        <g id="Labels">
          <path
            id="N2"
            d="M79.416 55.0449C79.5488 55.0449 79.6426 55.0762 79.6973 55.1387C79.7559 55.1973 79.7852 55.2988 79.7852 55.4434C79.7852 55.5879 79.7559 55.6914 79.6973 55.7539C79.6426 55.8125 79.5488 55.8418 79.416 55.8418H79.082V61.7832C79.082 61.8887 79.0449 61.9727 78.9707 62.0352C78.9004 62.0977 78.791 62.1289 78.6426 62.1289C78.4355 62.1289 78.2715 62.0215 78.1504 61.8066L75.1094 56.375H75.0859V61.2031H75.9121C76.0449 61.2031 76.1387 61.2344 76.1934 61.2969C76.252 61.3555 76.2812 61.457 76.2812 61.6016C76.2812 61.7461 76.252 61.8496 76.1934 61.9121C76.1387 61.9707 76.0449 62 75.9121 62H73.8379C73.7051 62 73.6094 61.9707 73.5508 61.9121C73.4961 61.8496 73.4688 61.7461 73.4688 61.6016C73.4688 61.457 73.4961 61.3555 73.5508 61.2969C73.6094 61.2344 73.7051 61.2031 73.8379 61.2031H74.2305V55.8418H73.7793C73.6465 55.8418 73.5508 55.8125 73.4922 55.7539C73.4375 55.6914 73.4102 55.5879 73.4102 55.4434C73.4102 55.2988 73.4375 55.1973 73.4922 55.1387C73.5508 55.0762 73.6465 55.0449 73.7793 55.0449H75.0918C75.1777 55.0449 75.2461 55.0586 75.2969 55.0859C75.3516 55.1133 75.3945 55.1543 75.4258 55.209L78.2031 60.1777H78.2266V55.8418H77.5176C77.3848 55.8418 77.2891 55.8125 77.2305 55.7539C77.1758 55.6914 77.1484 55.5879 77.1484 55.4434C77.1484 55.2988 77.1758 55.1973 77.2305 55.1387C77.2891 55.0762 77.3848 55.0449 77.5176 55.0449H79.416ZM83.5938 54.916C84.0469 54.916 84.4434 54.998 84.7832 55.1621C85.127 55.3223 85.3926 55.5566 85.5801 55.8652C85.7676 56.1738 85.8613 56.541 85.8613 56.9668C85.8613 57.3652 85.7617 57.7324 85.5625 58.0684C85.3672 58.4004 85.0605 58.7793 84.6426 59.2051L82.6738 61.2031H85.2168V60.4648C85.2168 60.3281 85.25 60.2305 85.3164 60.1719C85.3828 60.1133 85.4961 60.084 85.6562 60.084C85.8164 60.084 85.9297 60.1133 85.9961 60.1719C86.0625 60.2305 86.0957 60.3281 86.0957 60.4648V61.6016C86.0957 61.7461 86.0664 61.8496 86.0078 61.9121C85.9531 61.9707 85.8594 62 85.7266 62H81.6602C81.5273 62 81.4316 61.9707 81.373 61.9121C81.3184 61.8496 81.291 61.7461 81.291 61.6016C81.291 61.4531 81.3203 61.3477 81.3789 61.2852L83.957 58.6719C84.3164 58.3047 84.5684 58 84.7129 57.7578C84.8613 57.5117 84.9355 57.248 84.9355 56.9668C84.9355 56.6035 84.8184 56.3164 84.584 56.1055C84.3535 55.8906 84.0254 55.7832 83.5996 55.7832C83.1699 55.7832 82.7656 55.8926 82.3867 56.1113V56.7559C82.3867 56.8926 82.3535 56.9902 82.2871 57.0488C82.2207 57.1074 82.1074 57.1367 81.9473 57.1367C81.7871 57.1367 81.6738 57.1074 81.6074 57.0488C81.541 56.9902 81.5078 56.8926 81.5078 56.7559V55.8945C81.5078 55.7422 81.5527 55.6348 81.6426 55.5723C81.9277 55.3652 82.2363 55.2051 82.5684 55.0918C82.9004 54.9746 83.2422 54.916 83.5938 54.916Z"
            fill="white"
          />
          <path
            id="N3"
            d="M79.416 146.045C79.5488 146.045 79.6426 146.076 79.6973 146.139C79.7559 146.197 79.7852 146.299 79.7852 146.443C79.7852 146.588 79.7559 146.691 79.6973 146.754C79.6426 146.812 79.5488 146.842 79.416 146.842H79.082V152.783C79.082 152.889 79.0449 152.973 78.9707 153.035C78.9004 153.098 78.791 153.129 78.6426 153.129C78.4355 153.129 78.2715 153.021 78.1504 152.807L75.1094 147.375H75.0859V152.203H75.9121C76.0449 152.203 76.1387 152.234 76.1934 152.297C76.252 152.355 76.2812 152.457 76.2812 152.602C76.2812 152.746 76.252 152.85 76.1934 152.912C76.1387 152.971 76.0449 153 75.9121 153H73.8379C73.7051 153 73.6094 152.971 73.5508 152.912C73.4961 152.85 73.4688 152.746 73.4688 152.602C73.4688 152.457 73.4961 152.355 73.5508 152.297C73.6094 152.234 73.7051 152.203 73.8379 152.203H74.2305V146.842H73.7793C73.6465 146.842 73.5508 146.812 73.4922 146.754C73.4375 146.691 73.4102 146.588 73.4102 146.443C73.4102 146.299 73.4375 146.197 73.4922 146.139C73.5508 146.076 73.6465 146.045 73.7793 146.045H75.0918C75.1777 146.045 75.2461 146.059 75.2969 146.086C75.3516 146.113 75.3945 146.154 75.4258 146.209L78.2031 151.178H78.2266V146.842H77.5176C77.3848 146.842 77.2891 146.812 77.2305 146.754C77.1758 146.691 77.1484 146.588 77.1484 146.443C77.1484 146.299 77.1758 146.197 77.2305 146.139C77.2891 146.076 77.3848 146.045 77.5176 146.045H79.416ZM83.6523 145.916C84.1016 145.916 84.4941 145.996 84.8301 146.156C85.166 146.312 85.4258 146.537 85.6094 146.83C85.793 147.119 85.8848 147.459 85.8848 147.85C85.8848 148.186 85.8066 148.477 85.6504 148.723C85.4941 148.965 85.2734 149.158 84.9883 149.303C85.3438 149.451 85.6191 149.668 85.8145 149.953C86.0137 150.238 86.1133 150.58 86.1133 150.979C86.1133 151.404 86.0176 151.779 85.8262 152.104C85.6387 152.428 85.3633 152.68 85 152.859C84.6367 153.039 84.2031 153.129 83.6992 153.129C83.3164 153.129 82.9297 153.062 82.5391 152.93C82.1484 152.797 81.7988 152.617 81.4902 152.391C81.373 152.305 81.3145 152.207 81.3145 152.098C81.3145 152.02 81.3477 151.924 81.4141 151.811C81.5156 151.646 81.6289 151.564 81.7539 151.564C81.8164 151.564 81.8828 151.59 81.9531 151.641C82.2109 151.832 82.4902 151.984 82.791 152.098C83.0918 152.207 83.3945 152.262 83.6992 152.262C84.1836 152.262 84.5527 152.148 84.8066 151.922C85.0605 151.691 85.1875 151.377 85.1875 150.979C85.1875 150.576 85.0586 150.271 84.8008 150.064C84.5469 149.854 84.1895 149.748 83.7285 149.748H83.3008C83.168 149.748 83.0723 149.719 83.0137 149.66C82.959 149.598 82.9316 149.494 82.9316 149.35C82.9316 149.205 82.959 149.104 83.0137 149.045C83.0723 148.982 83.168 148.951 83.3008 148.951H83.623C84.0684 148.951 84.4062 148.857 84.6367 148.67C84.8672 148.482 84.9824 148.209 84.9824 147.85C84.9824 147.518 84.8672 147.258 84.6367 147.07C84.4062 146.879 84.0801 146.783 83.6582 146.783C83.2051 146.783 82.8203 146.859 82.5039 147.012V147.404C82.5039 147.541 82.4707 147.639 82.4043 147.697C82.3379 147.756 82.2246 147.785 82.0645 147.785C81.9043 147.785 81.791 147.756 81.7246 147.697C81.6582 147.639 81.625 147.541 81.625 147.404V146.766C81.625 146.68 81.6367 146.611 81.6602 146.561C81.6875 146.51 81.7285 146.467 81.7832 146.432C82.3418 146.088 82.9648 145.916 83.6523 145.916Z"
            fill="white"
          />
          <path
            id="N4"
            d="M124.416 100.045C124.549 100.045 124.643 100.076 124.697 100.139C124.756 100.197 124.785 100.299 124.785 100.443C124.785 100.588 124.756 100.691 124.697 100.754C124.643 100.812 124.549 100.842 124.416 100.842H124.082V106.783C124.082 106.889 124.045 106.973 123.971 107.035C123.9 107.098 123.791 107.129 123.643 107.129C123.436 107.129 123.271 107.021 123.15 106.807L120.109 101.375H120.086V106.203H120.912C121.045 106.203 121.139 106.234 121.193 106.297C121.252 106.355 121.281 106.457 121.281 106.602C121.281 106.746 121.252 106.85 121.193 106.912C121.139 106.971 121.045 107 120.912 107H118.838C118.705 107 118.609 106.971 118.551 106.912C118.496 106.85 118.469 106.746 118.469 106.602C118.469 106.457 118.496 106.355 118.551 106.297C118.609 106.234 118.705 106.203 118.838 106.203H119.23V100.842H118.779C118.646 100.842 118.551 100.812 118.492 100.754C118.438 100.691 118.41 100.588 118.41 100.443C118.41 100.299 118.438 100.197 118.492 100.139C118.551 100.076 118.646 100.045 118.779 100.045H120.092C120.178 100.045 120.246 100.059 120.297 100.086C120.352 100.113 120.395 100.154 120.426 100.209L123.203 105.178H123.227V100.842H122.518C122.385 100.842 122.289 100.812 122.23 100.754C122.176 100.691 122.148 100.588 122.148 100.443C122.148 100.299 122.176 100.197 122.23 100.139C122.289 100.076 122.385 100.045 122.518 100.045H124.416ZM129.596 99.916C129.936 99.916 130.105 100.068 130.105 100.373V104.094H131.055C131.188 104.094 131.281 104.125 131.336 104.188C131.395 104.246 131.424 104.348 131.424 104.492C131.424 104.637 131.395 104.74 131.336 104.803C131.281 104.861 131.188 104.891 131.055 104.891H130.105V106.203H130.879C131.012 106.203 131.105 106.234 131.16 106.297C131.219 106.355 131.248 106.457 131.248 106.602C131.248 106.746 131.219 106.85 131.16 106.912C131.105 106.971 131.012 107 130.879 107H128.359C128.227 107 128.131 106.971 128.072 106.912C128.018 106.85 127.99 106.746 127.99 106.602C127.99 106.457 128.018 106.355 128.072 106.297C128.131 106.234 128.227 106.203 128.359 106.203H129.227V104.891H126.426C126.293 104.891 126.197 104.861 126.139 104.803C126.084 104.74 126.057 104.637 126.057 104.492C126.057 104.363 126.076 104.271 126.115 104.217L128.951 100.273C129.037 100.152 129.129 100.062 129.227 100.004C129.324 99.9453 129.447 99.916 129.596 99.916ZM127.223 104.094H129.227L129.273 101.188L127.223 104.094Z"
            fill="white"
          />
          <path
            id="N5"
            d="M195.416 100.045C195.549 100.045 195.643 100.076 195.697 100.139C195.756 100.197 195.785 100.299 195.785 100.443C195.785 100.588 195.756 100.691 195.697 100.754C195.643 100.812 195.549 100.842 195.416 100.842H195.082V106.783C195.082 106.889 195.045 106.973 194.971 107.035C194.9 107.098 194.791 107.129 194.643 107.129C194.436 107.129 194.271 107.021 194.15 106.807L191.109 101.375H191.086V106.203H191.912C192.045 106.203 192.139 106.234 192.193 106.297C192.252 106.355 192.281 106.457 192.281 106.602C192.281 106.746 192.252 106.85 192.193 106.912C192.139 106.971 192.045 107 191.912 107H189.838C189.705 107 189.609 106.971 189.551 106.912C189.496 106.85 189.469 106.746 189.469 106.602C189.469 106.457 189.496 106.355 189.551 106.297C189.609 106.234 189.705 106.203 189.838 106.203H190.23V100.842H189.779C189.646 100.842 189.551 100.812 189.492 100.754C189.438 100.691 189.41 100.588 189.41 100.443C189.41 100.299 189.438 100.197 189.492 100.139C189.551 100.076 189.646 100.045 189.779 100.045H191.092C191.178 100.045 191.246 100.059 191.297 100.086C191.352 100.113 191.395 100.154 191.426 100.209L194.203 105.178H194.227V100.842H193.518C193.385 100.842 193.289 100.812 193.23 100.754C193.176 100.691 193.148 100.588 193.148 100.443C193.148 100.299 193.176 100.197 193.23 100.139C193.289 100.076 193.385 100.045 193.518 100.045H195.416ZM201.381 100.045C201.514 100.045 201.607 100.076 201.662 100.139C201.721 100.197 201.75 100.299 201.75 100.443C201.75 100.588 201.721 100.691 201.662 100.754C201.607 100.812 201.514 100.842 201.381 100.842H198.65L198.574 102.723C198.965 102.504 199.385 102.395 199.834 102.395C200.303 102.395 200.709 102.494 201.053 102.693C201.396 102.893 201.658 103.17 201.838 103.525C202.021 103.877 202.113 104.281 202.113 104.738C202.113 105.195 202.012 105.605 201.809 105.969C201.605 106.328 201.316 106.611 200.941 106.818C200.566 107.025 200.133 107.129 199.641 107.129C199.266 107.129 198.889 107.066 198.51 106.941C198.131 106.816 197.787 106.646 197.479 106.432C197.357 106.35 197.297 106.25 197.297 106.133C197.297 106.047 197.328 105.953 197.391 105.852C197.492 105.684 197.605 105.6 197.73 105.6C197.793 105.6 197.859 105.625 197.93 105.676C198.184 105.855 198.459 105.998 198.756 106.104C199.053 106.209 199.348 106.262 199.641 106.262C199.957 106.262 200.232 106.199 200.467 106.074C200.701 105.945 200.879 105.768 201 105.541C201.125 105.311 201.188 105.043 201.188 104.738C201.188 104.449 201.129 104.193 201.012 103.971C200.898 103.748 200.732 103.574 200.514 103.449C200.299 103.324 200.047 103.262 199.758 103.262C199.492 103.262 199.254 103.297 199.043 103.367C198.832 103.434 198.627 103.537 198.428 103.678C198.365 103.717 198.268 103.736 198.135 103.736C197.971 103.736 197.854 103.707 197.783 103.648C197.717 103.59 197.688 103.492 197.695 103.355L197.812 100.426C197.82 100.289 197.855 100.191 197.918 100.133C197.98 100.074 198.092 100.045 198.252 100.045H201.381Z"
            fill="white"
          />
          <path
            id="N6"
            d="M268.416 100.045C268.549 100.045 268.643 100.076 268.697 100.139C268.756 100.197 268.785 100.299 268.785 100.443C268.785 100.588 268.756 100.691 268.697 100.754C268.643 100.812 268.549 100.842 268.416 100.842H268.082V106.783C268.082 106.889 268.045 106.973 267.971 107.035C267.9 107.098 267.791 107.129 267.643 107.129C267.436 107.129 267.271 107.021 267.15 106.807L264.109 101.375H264.086V106.203H264.912C265.045 106.203 265.139 106.234 265.193 106.297C265.252 106.355 265.281 106.457 265.281 106.602C265.281 106.746 265.252 106.85 265.193 106.912C265.139 106.971 265.045 107 264.912 107H262.838C262.705 107 262.609 106.971 262.551 106.912C262.496 106.85 262.469 106.746 262.469 106.602C262.469 106.457 262.496 106.355 262.551 106.297C262.609 106.234 262.705 106.203 262.838 106.203H263.23V100.842H262.779C262.646 100.842 262.551 100.812 262.492 100.754C262.438 100.691 262.41 100.588 262.41 100.443C262.41 100.299 262.438 100.197 262.492 100.139C262.551 100.076 262.646 100.045 262.779 100.045H264.092C264.178 100.045 264.246 100.059 264.297 100.086C264.352 100.113 264.395 100.154 264.426 100.209L267.203 105.178H267.227V100.842H266.518C266.385 100.842 266.289 100.812 266.23 100.754C266.176 100.691 266.148 100.588 266.148 100.443C266.148 100.299 266.176 100.197 266.23 100.139C266.289 100.076 266.385 100.045 266.518 100.045H268.416ZM274.568 99.916C274.674 99.9121 274.756 99.9473 274.814 100.021C274.877 100.096 274.908 100.232 274.908 100.432C274.908 100.553 274.889 100.641 274.85 100.695C274.814 100.746 274.762 100.773 274.691 100.777C273.652 100.832 272.854 101.102 272.295 101.586C271.736 102.066 271.402 102.721 271.293 103.549C271.496 103.283 271.746 103.078 272.043 102.934C272.34 102.789 272.656 102.717 272.992 102.717C273.422 102.717 273.809 102.809 274.152 102.992C274.5 103.176 274.771 103.436 274.967 103.771C275.166 104.107 275.266 104.494 275.266 104.932C275.266 105.354 275.166 105.732 274.967 106.068C274.768 106.4 274.484 106.66 274.117 106.848C273.754 107.035 273.336 107.129 272.863 107.129C272.438 107.129 272.045 107.031 271.686 106.836C271.33 106.641 271.043 106.357 270.824 105.986C270.523 105.471 270.373 104.809 270.373 104C270.373 103.324 270.516 102.686 270.801 102.084C271.09 101.482 271.547 100.982 272.172 100.584C272.801 100.182 273.6 99.959 274.568 99.916ZM272.863 103.584C272.578 103.584 272.322 103.639 272.096 103.748C271.869 103.854 271.691 104.002 271.562 104.193C271.438 104.381 271.375 104.598 271.375 104.844C271.375 105.117 271.436 105.361 271.557 105.576C271.682 105.791 271.855 105.959 272.078 106.08C272.305 106.201 272.566 106.262 272.863 106.262C273.16 106.262 273.42 106.207 273.643 106.098C273.865 105.988 274.037 105.834 274.158 105.635C274.279 105.432 274.34 105.197 274.34 104.932C274.34 104.662 274.279 104.426 274.158 104.223C274.041 104.02 273.871 103.863 273.648 103.754C273.43 103.641 273.168 103.584 272.863 103.584Z"
            fill="white"
          />
          <path
            id="N7"
            d="M340.416 100.045C340.549 100.045 340.643 100.076 340.697 100.139C340.756 100.197 340.785 100.299 340.785 100.443C340.785 100.588 340.756 100.691 340.697 100.754C340.643 100.812 340.549 100.842 340.416 100.842H340.082V106.783C340.082 106.889 340.045 106.973 339.971 107.035C339.9 107.098 339.791 107.129 339.643 107.129C339.436 107.129 339.271 107.021 339.15 106.807L336.109 101.375H336.086V106.203H336.912C337.045 106.203 337.139 106.234 337.193 106.297C337.252 106.355 337.281 106.457 337.281 106.602C337.281 106.746 337.252 106.85 337.193 106.912C337.139 106.971 337.045 107 336.912 107H334.838C334.705 107 334.609 106.971 334.551 106.912C334.496 106.85 334.469 106.746 334.469 106.602C334.469 106.457 334.496 106.355 334.551 106.297C334.609 106.234 334.705 106.203 334.838 106.203H335.23V100.842H334.779C334.646 100.842 334.551 100.812 334.492 100.754C334.438 100.691 334.41 100.588 334.41 100.443C334.41 100.299 334.438 100.197 334.492 100.139C334.551 100.076 334.646 100.045 334.779 100.045H336.092C336.178 100.045 336.246 100.059 336.297 100.086C336.352 100.113 336.395 100.154 336.426 100.209L339.203 105.178H339.227V100.842H338.518C338.385 100.842 338.289 100.812 338.23 100.754C338.176 100.691 338.148 100.588 338.148 100.443C338.148 100.299 338.176 100.197 338.23 100.139C338.289 100.076 338.385 100.045 338.518 100.045H340.416ZM346.855 100.045C346.988 100.045 347.082 100.076 347.137 100.139C347.195 100.197 347.225 100.299 347.225 100.443C347.225 100.537 347.213 100.615 347.189 100.678L344.693 106.859C344.658 106.949 344.602 107.016 344.523 107.059C344.449 107.105 344.359 107.129 344.254 107.129C344.113 107.129 343.998 107.1 343.908 107.041C343.822 106.986 343.779 106.912 343.779 106.818C343.779 106.764 343.789 106.715 343.809 106.672L346.193 100.842H343.416V101.697C343.416 101.834 343.383 101.932 343.316 101.99C343.25 102.049 343.137 102.078 342.977 102.078C342.816 102.078 342.703 102.049 342.637 101.99C342.57 101.932 342.537 101.834 342.537 101.697V100.443C342.537 100.299 342.564 100.197 342.619 100.139C342.678 100.076 342.773 100.045 342.906 100.045H346.855Z"
            fill="white"
          />
          <path
            id="N8"
            d="M340.416 33.0449C340.549 33.0449 340.643 33.0762 340.697 33.1387C340.756 33.1973 340.785 33.2988 340.785 33.4434C340.785 33.5879 340.756 33.6914 340.697 33.7539C340.643 33.8125 340.549 33.8418 340.416 33.8418H340.082V39.7832C340.082 39.8887 340.045 39.9727 339.971 40.0352C339.9 40.0977 339.791 40.1289 339.643 40.1289C339.436 40.1289 339.271 40.0215 339.15 39.8066L336.109 34.375H336.086V39.2031H336.912C337.045 39.2031 337.139 39.2344 337.193 39.2969C337.252 39.3555 337.281 39.457 337.281 39.6016C337.281 39.7461 337.252 39.8496 337.193 39.9121C337.139 39.9707 337.045 40 336.912 40H334.838C334.705 40 334.609 39.9707 334.551 39.9121C334.496 39.8496 334.469 39.7461 334.469 39.6016C334.469 39.457 334.496 39.3555 334.551 39.2969C334.609 39.2344 334.705 39.2031 334.838 39.2031H335.23V33.8418H334.779C334.646 33.8418 334.551 33.8125 334.492 33.7539C334.438 33.6914 334.41 33.5879 334.41 33.4434C334.41 33.2988 334.438 33.1973 334.492 33.1387C334.551 33.0762 334.646 33.0449 334.779 33.0449H336.092C336.178 33.0449 336.246 33.0586 336.297 33.0859C336.352 33.1133 336.395 33.1543 336.426 33.209L339.203 38.1777H339.227V33.8418H338.518C338.385 33.8418 338.289 33.8125 338.23 33.7539C338.176 33.6914 338.148 33.5879 338.148 33.4434C338.148 33.2988 338.176 33.1973 338.23 33.1387C338.289 33.0762 338.385 33.0449 338.518 33.0449H340.416ZM344.793 32.916C345.199 32.916 345.566 33.002 345.895 33.1738C346.227 33.3418 346.486 33.5742 346.674 33.8711C346.861 34.168 346.955 34.4941 346.955 34.8496C346.955 35.166 346.865 35.4492 346.686 35.6992C346.506 35.9492 346.271 36.1523 345.982 36.3086C346.346 36.4727 346.637 36.7012 346.855 36.9941C347.074 37.2871 347.184 37.625 347.184 38.0078C347.184 38.4102 347.08 38.7734 346.873 39.0977C346.666 39.418 346.381 39.6699 346.018 39.8535C345.654 40.0371 345.246 40.1289 344.793 40.1289C344.34 40.1289 343.932 40.0371 343.568 39.8535C343.205 39.6699 342.92 39.418 342.713 39.0977C342.506 38.7734 342.402 38.4102 342.402 38.0078C342.402 37.625 342.512 37.2871 342.73 36.9941C342.949 36.7012 343.238 36.4727 343.598 36.3086C343.309 36.1523 343.074 35.9492 342.895 35.6992C342.719 35.4492 342.631 35.166 342.631 34.8496C342.631 34.4941 342.725 34.168 342.912 33.8711C343.1 33.5742 343.357 33.3418 343.686 33.1738C344.018 33.002 344.387 32.916 344.793 32.916ZM344.793 33.7832C344.551 33.7832 344.334 33.8281 344.143 33.918C343.955 34.0039 343.807 34.1289 343.697 34.293C343.588 34.457 343.533 34.6484 343.533 34.8672C343.533 35.0664 343.588 35.248 343.697 35.4121C343.807 35.5762 343.957 35.7051 344.148 35.7988C344.344 35.8926 344.559 35.9395 344.793 35.9395C345.027 35.9395 345.24 35.8926 345.432 35.7988C345.627 35.7051 345.779 35.5762 345.889 35.4121C345.998 35.248 346.053 35.0664 346.053 34.8672C346.053 34.6484 345.998 34.457 345.889 34.293C345.779 34.1289 345.629 34.0039 345.438 33.918C345.25 33.8281 345.035 33.7832 344.793 33.7832ZM344.793 36.7539C344.508 36.7539 344.256 36.8066 344.037 36.9121C343.818 37.0176 343.646 37.166 343.521 37.3574C343.4 37.5449 343.34 37.7598 343.34 38.002C343.34 38.2441 343.4 38.4609 343.521 38.6523C343.646 38.8438 343.818 38.9941 344.037 39.1035C344.256 39.209 344.508 39.2617 344.793 39.2617C345.078 39.2617 345.33 39.209 345.549 39.1035C345.768 38.9941 345.938 38.8438 346.059 38.6523C346.184 38.4609 346.246 38.2441 346.246 38.002C346.246 37.7598 346.184 37.5449 346.059 37.3574C345.938 37.166 345.768 37.0176 345.549 36.9121C345.33 36.8066 345.078 36.7539 344.793 36.7539Z"
            fill="white"
          />
          <path
            id="+"
            d="M413.195 98.9766C413.484 98.9766 413.688 99.0352 413.805 99.1523C413.93 99.2617 413.992 99.4492 413.992 99.7148V103.383H417.66C417.926 103.383 418.113 103.445 418.223 103.57C418.34 103.688 418.398 103.891 418.398 104.18C418.398 104.469 418.34 104.676 418.223 104.801C418.113 104.918 417.926 104.977 417.66 104.977H413.992V108.645C413.992 108.91 413.93 109.102 413.805 109.219C413.688 109.328 413.484 109.383 413.195 109.383C412.906 109.383 412.699 109.328 412.574 109.219C412.457 109.102 412.398 108.91 412.398 108.645V104.977H408.73C408.465 104.977 408.273 104.918 408.156 104.801C408.047 104.676 407.992 104.469 407.992 104.18C407.992 103.891 408.047 103.688 408.156 103.57C408.273 103.445 408.465 103.383 408.73 103.383H412.398V99.7148C412.398 99.4492 412.457 99.2617 412.574 99.1523C412.699 99.0352 412.906 98.9766 413.195 98.9766Z"
            fill="white"
          />
          <path
            id="-"
            d="M38.6602 102.855C38.8477 102.855 38.9922 102.891 39.0938 102.961C39.1953 103.031 39.2695 103.16 39.3164 103.348C39.3711 103.535 39.3984 103.812 39.3984 104.18C39.3984 104.547 39.3711 104.824 39.3164 105.012C39.2695 105.199 39.1953 105.328 39.0938 105.398C38.9922 105.461 38.8477 105.492 38.6602 105.492H29.7305C29.543 105.492 29.3984 105.461 29.2969 105.398C29.1953 105.328 29.1172 105.199 29.0625 105.012C29.0156 104.824 28.9922 104.547 28.9922 104.18C28.9922 103.812 29.0156 103.535 29.0625 103.348C29.1172 103.16 29.1953 103.031 29.2969 102.961C29.3984 102.891 29.543 102.855 29.7305 102.855H38.6602Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="problem-container">
      <div className="dfa-problem">{showCfg ? dfa1Div : dfa2Div}</div>
      <div className="pda-problem">
        {showCfg ? (
          <img src="/images/PDA1.png" alt="PDA 1" />
        ) : (
          <img src="/images/PDA2.png" alt="PDA 2" />
        )}
      </div>
    </div>
  );
};

export default PdaDfaContainer;
