;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-correct" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M412.710135 859.762425c-16.766872 0-33.524534-6.396687-46.308699-19.179828L73.968154 548.176944c-25.577538-25.575492-25.579585-67.042929-0.004093-92.619444 25.574469-25.577538 67.041906-25.579585 92.618421-0.004093L413.034523 701.980889l451.024254-444.662359c25.759687-25.393343 67.224054-25.097608 92.617397 0.657986 25.393343 25.756617 25.098631 67.223031-0.657986 92.616374L458.688305 840.908008C445.935863 853.480348 429.318394 859.762425 412.710135 859.762425z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-time" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.414 62.99c-247.824 0-449.424 201.6-449.424 449.424 0 247.842 201.592 449.424 449.424 449.424 247.842 0 449.424-201.582 449.424-449.424 0-247.824-201.582-449.424-449.424-449.424zM512.414 897.47c-212.283 0-385.047-172.773-385.047-385.056s172.593-385.047 385.047-385.047c212.463 0 385.047 172.593 385.047 385.047 0 212.463-172.764 385.047-385.047 385.047z"  ></path>' +
    '' +
    '<path d="M512.585 512.414v-224.542c0-17.775-14.319-32.274-32.103-32.274-17.775 0-32.094 14.499-32.094 32.274v256.815c0 0.019 0 0.041 0 0.064 0 17.695 14.345 32.040 32.040 32.040 0.020 0 0.037 0 0.057 0h192.615c17.775 0 32.274-14.328 32.274-32.103-0.18-17.947-14.67-32.274-32.274-32.274h-160.515z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-time-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.414 62.99c-247.824 0-449.424 201.6-449.424 449.424 0 247.842 201.592 449.424 449.424 449.424 247.842 0 449.424-201.582 449.424-449.424 0-247.824-201.582-449.424-449.424-449.424zM672.236 576.62h-191.574c-17.81-0.036-32.239-14.464-32.274-32.271v-255.441c0-0.016 0-0.035 0-0.053 0-17.695 14.345-32.040 32.040-32.040 0.020 0 0.037 0 0.057 0 0.016 0 0.037 0 0.060 0 17.695 0 32.040 14.345 32.040 32.040 0 0.020 0 0.037 0 0.057v223.673h159.822c0.019 0 0.041 0 0.063 0 17.695 0 32.040 14.345 32.040 32.040 0 0.022 0 0.044 0 0.067 0 17.771-14.499 31.928-32.274 31.928z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M799.722 743.993c61.992-74.483 95.914-167.373 95.914-265.077 0-229.293-186.84-415.926-416.565-415.926-229.545 0-416.394 186.633-416.394 415.926 0 229.302 186.84 415.935 416.394 415.935 60.102 0 118.133-12.555 172.377-37.332 16.192-7.389 23.247-26.317 15.84-42.308-5.129-11.145-16.2-18.742-29.046-18.742-4.827 0-9.403 1.073-13.504 2.993-42.504 19.807-92.501 31.409-145.208 31.409-0.164 0-0.329 0-0.493 0-194.222 0-352.306-157.914-352.306-351.945 0-194.031 158.085-351.936 352.332-351.936 194.247 0 352.332 157.905 352.332 351.936 0 91.35-34.956 177.867-98.153 243.747-5.533 5.744-8.941 13.568-8.941 22.19 0 9.050 3.757 17.223 9.795 23.044 1.036 0.864 2.243 1.207 3.277 2.071 0.864 1.206 1.377 2.753 2.412 3.96l165.672 176.994c5.832 6.248 14.117 10.144 23.312 10.144 0.037 0 0.075 0 0.112 0 7.914 0 15.663-2.925 21.864-8.595 6.348-5.845 10.31-14.197 10.31-23.474 0-8.425-3.269-16.088-8.607-21.788l-152.713-163.224z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 958.017c-119.648 0-232.129-46.368-316.737-130.56C110.623 743.202 64 631.201 64 512.002c0-119.169 46.624-231.2 131.232-315.425 84.608-84.191 197.089-130.56 316.737-130.56s232.129 46.369 316.704 130.56c84.672 84.225 131.263 196.256 131.263 315.392 0.033 119.2-46.591 231.233-131.263 315.455C744.13 911.616 631.648 958.017 512 958.017z m0-828.034c-102.624 0-199.072 39.744-271.583 111.937C167.937 314.048 128 409.984 128 512s39.903 197.952 112.384 270.047c72.512 72.192 168.96 111.937 271.583 111.937 102.593 0 199.072-39.744 271.584-111.937 72.48-72.16 112.416-168.063 112.384-270.08 0-102.016-39.904-197.919-112.384-270.016C711.07 169.76 614.593 129.983 512 129.983z"  ></path>' +
    '' +
    '<path d="M736 480H544V288c0-17.664-14.335-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.337-32 32.002s14.336 32 32 32h192v192c0 17.696 14.337 32.001 32.002 32.001s32-14.303 32-32V544h192c17.696 0 32.001-14.336 32.001-32.001s-14.306-32-32.002-32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M828.704 196.576C744.096 112.384 631.648 66.016 512 66.016s-232.129 46.368-316.737 130.56C110.624 280.8 64 392.832 64 512c0 119.2 46.624 231.2 131.232 315.424 84.608 84.192 197.089 130.56 316.737 130.56s232.129-46.368 316.704-130.56C913.345 743.17 959.97 631.136 959.936 511.97c0.031-119.168-46.56-231.169-131.232-315.393zM736.001 544H544v192c0 17.696-14.336 32-32.001 32s-32-14.303-32-32V544H288c-17.664 0-32-14.336-32-32.001s14.336-32 32-32h192V288c0-17.664 14.337-32 32.002-32s32 14.336 32 32v192h192c17.696 0 32.001 14.337 32.001 32.002S753.697 544 736.001 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-info" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 958.017C266.08 958.017 65.983 757.952 65.983 512 65.983 266.08 266.08 65.983 512 65.983c245.952 0 446.017 200.065 446.017 446.017S757.952 958.017 512 958.017z m0-828.034c-210.656 0-382.017 171.36-382.017 382.017 0 210.625 171.36 382.017 382.017 382.017 210.625 0 382.017-171.36 382.017-382.017S722.625 129.983 512 129.983z"  ></path>' +
    '' +
    '<path d="M464 304c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zM512 768c-17.665 0-32-14.303-32-32V448c0-17.665 14.335-32 32-32s32 14.335 32 32v288c0 17.697-14.335 32-32 32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-info-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.983C266.048 65.983 65.983 266.048 65.983 512S266.048 958.017 512 958.017 958.017 757.952 958.017 512 757.952 65.983 512 65.983z m32 670.018c0 17.696-14.303 32-32 32s-32-14.303-32-32V448c0-17.696 14.303-32 32-32 17.696 0 32 14.303 32 32v288z m-32-384c-26.496 0-48-21.537-48-48C464 277.472 485.504 256 512 256s48 21.472 48 48c0 26.464-21.504 48-48 48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-831.713c-211.584 0-383.713 172.129-383.713 383.713 0 211.552 172.129 383.713 383.713 383.713 211.552 0 383.713-172.16 383.713-383.713 0-211.584-172.161-383.713-383.713-383.713z"  ></path>' +
    '' +
    '<path d="M557.055 513.376l138.368-136.864c12.576-12.416 12.673-32.672 0.256-45.248s-32.704-12.673-45.248-0.256l-138.56 137.024-136.448-136.864c-12.513-12.513-32.735-12.577-45.248-0.064-12.513 12.48-12.544 32.735-0.064 45.248l136.256 136.672L328.99 648.928c-12.577 12.447-12.673 32.672-0.257 45.248a31.886 31.886 0 0 0 22.752 9.504c8.128 0 16.256-3.103 22.497-9.248l137.567-136.064 138.688 139.137c6.24 6.271 14.432 9.407 22.657 9.407a31.937 31.937 0 0 0 22.591-9.344c12.513-12.48 12.544-32.704 0.064-45.248L557.055 513.376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.991 64 64 264.96 64 512s200.96 448 448 448c247.009 0 448-200.96 448-448S759.04 64 512 64z m182.752 585.984c12.48 12.544 12.448 32.768-0.063 45.248a31.937 31.937 0 0 1-22.592 9.344c-8.224 0-16.416-3.136-22.657-9.408l-137.6-138.016-138.048 136.577c-6.239 6.144-14.368 9.247-22.496 9.247a31.886 31.886 0 0 1-22.752-9.504c-12.416-12.576-12.32-32.8 0.257-45.248L466.688 511.84 329.311 374.016c-12.48-12.513-12.447-32.768 0.064-45.248 12.513-12.513 32.735-12.448 45.248 0.063l137.568 137.985L650.239 330.24c12.543-12.447 32.831-12.32 45.248 0.257 12.447 12.576 12.32 32.831-0.257 45.248L557.344 512.127l137.408 137.857z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-problem" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M464 784.352c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"  ></path>' +
    '' +
    '<path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-831.713c-211.584 0-383.713 172.129-383.713 383.713 0 211.552 172.129 383.713 383.713 383.713 211.552 0 383.713-172.16 383.713-383.713 0-211.584-172.161-383.713-383.713-383.713z"  ></path>' +
    '' +
    '<path d="M512 673.695c-17.665 0-32-14.336-32-31.999v-54.112c0-52.353 39.999-92.352 75.327-127.648 25.887-25.92 52.672-52.672 52.672-74.016 0-53.344-43.072-96.736-95.999-96.736-53.823 0-96 41.536-96 94.56 0 17.664-14.335 31.999-32 31.999s-32-14.336-32-32c0-87.423 71.774-158.559 160-158.559S672 297.28 672 385.92c0 47.904-36.32 84.191-71.424 119.296-27.84 27.776-56.575 56.512-56.575 82.335v54.112c0 17.665-14.336 32.032-32.001 32.032z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-problem-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64z m0 768.353c-26.496 0-48-21.505-48-48 0-26.497 21.504-48.001 48-48.001s48 21.504 48 48-21.504 48-48 48z m88.576-327.168c-27.84 27.808-56.575 56.544-56.575 82.368v54.112c0 17.665-14.336 32.001-32.001 32.001s-32-14.336-32-32v-54.113c0-52.353 39.999-92.352 75.327-127.648 25.887-25.887 52.672-52.64 52.672-73.984 0-53.343-43.072-96.735-95.999-96.735-53.823 0-96 41.536-96 94.56 0 17.664-14.335 31.999-32 31.999s-32-14.337-32-32c0-87.424 71.774-158.559 160-158.559s160 72.095 160 160.735c0 47.87-36.32 84.16-71.424 119.264z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-c-check" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-831.713c-211.584 0-383.713 172.129-383.713 383.713 0 211.552 172.129 383.713 383.713 383.713 211.552 0 383.713-172.16 383.713-383.713 0-211.584-172.161-383.713-383.713-383.713z"  ></path>' +
    '' +
    '<path d="M726.977 393.184c-12.544-12.447-32.832-12.32-45.248 0.256l-233.28 235.84-103.264-106.112c-12.352-12.704-32.608-12.928-45.248-0.64-12.672 12.32-12.96 32.608-0.64 45.248l126.017 129.503c0.064 0.097 0.193 0.097 0.256 0.193 0.064 0.063 0.097 0.193 0.16 0.256 2.016 1.984 4.512 3.2 6.881 4.545 1.247 0.673 2.24 1.792 3.52 2.303 3.872 1.6 8 2.4 12.096 2.4 4.065 0 8.128-0.8 11.967-2.336 1.248-0.513 2.21-1.536 3.393-2.176 2.4-1.344 4.895-2.529 6.944-4.545 0.064-0.064 0.096-0.193 0.193-0.256 0.063-0.097 0.16-0.128 0.256-0.193l256.224-259.009c12.444-12.605 12.316-32.86-0.227-45.277z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-c-check-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.983C266.08 65.983 65.983 266.08 65.983 512c0 245.952 200.065 446.017 446.017 446.017S958.017 757.952 958.017 512c0-245.92-200.065-446.017-446.017-446.017z m215.231 372.45L471.008 697.438c-0.064 0.064-0.193 0.096-0.257 0.193-0.096 0.063-0.096 0.192-0.192 0.256-2.05 1.984-4.576 3.2-6.945 4.545-1.183 0.672-2.143 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.967 2.336-4.096 0-8.225-0.8-12.097-2.4-1.28-0.543-2.303-1.632-3.52-2.303-2.368-1.344-4.831-2.529-6.88-4.545-0.064-0.063-0.097-0.192-0.16-0.256-0.064-0.096-0.193-0.096-0.256-0.193L299.325 567.745c-12.32-12.673-12.033-32.928 0.64-45.248 12.673-12.288 32.895-12.064 45.248 0.64l103.263 106.112 233.28-235.84c12.417-12.576 32.705-12.703 45.248-0.256 12.516 12.448 12.644 32.703 0.227 45.28z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add-line" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M911.733 477.116l-361.067 0.114v-362.521c0-20.099-16.311-36.41-36.409-36.41s-36.409 16.311-36.409 36.409v362.27l-366.894-0.202c-20.061 0-36.335 16.202-36.409 36.3-0.11 20.099 16.165 36.445 36.262 36.518l367.039 0.202v363.141c0 20.134 16.311 36.41 36.407 36.41s36.409-16.274 36.409-36.409v-362.89l360.922-0.114c20.061 0 36.335-16.202 36.409-36.301s-16.199-36.444-36.261-36.517z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-minus-line" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M912.208 548.409h-796.809c-20.1 0-36.411-16.31-36.411-36.409s16.311-36.409 36.41-36.409h796.809c20.134 0 36.409 16.31 36.409 36.409s-16.275 36.409-36.409 36.409z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-choose" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M939.696 268.753c-14.637-13.726-37.719-13.071-51.445 1.602l-485.551 516.969-265.238-261.344c-14.342-14.127-37.392-13.98-51.519 0.364-14.127 14.309-13.945 37.393 0.402 51.483l291.818 287.485c0.109 0.109 0.254 0.144 0.364 0.254s0.144 0.255 0.254 0.364c2.293 2.185 5.062 3.425 7.719 4.88 1.311 0.766 2.438 1.892 3.823 2.438 4.295 1.676 8.846 2.548 13.361 2.548 4.769 0 9.539-0.948 13.98-2.839 1.494-0.619 2.658-1.892 4.043-2.695 2.731-1.603 5.569-2.949 7.901-5.315 0.109-0.109 0.144-0.291 0.255-0.4 0.071-0.11 0.219-0.146 0.326-0.255l511.071-544.096c13.838-14.597 13.074-37.644-1.561-51.441z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close-line" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M563.555 513.421l301.829-300.265c14.272-14.199 14.346-37.211 0.146-51.484-14.237-14.308-37.211-14.343-51.484-0.144l-301.903 300.3-299.28-300.191c-14.162-14.199-37.21-14.272-51.483-0.073-14.237 14.199-14.272 37.245-0.073 51.519l299.209 300.118-301.684 300.083c-14.271 14.199-14.343 37.21-0.144 51.483 6.586 6.635 15.708 10.74 25.791 10.74 0.007 0 0.016 0 0.023 0 9.283 0 18.567-3.531 25.667-10.594l301.758-300.155 302.012 302.922c7.1 7.136 16.421 10.704 25.778 10.704 0.006 0 0.014 0 0.021 0 10.029 0 19.108-4.063 25.683-10.631 14.236-14.199 14.271-37.211 0.071-51.483l-301.941-302.85z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-c-radio-none" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-832c-211.744 0-384 172.256-384 384s172.256 384 384 384 384-172.256 384-384-172.256-384-384-384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.983C266.08 65.983 65.983 266.08 65.983 512c0 245.952 200.065 446.017 446.017 446.017S958.017 757.952 958.017 512c0-245.92-200.065-446.017-446.017-446.017z m0 828.034c-210.656 0-382.017-171.392-382.017-382.017 0-210.656 171.36-382.017 382.017-382.017 210.625 0 382.017 171.36 382.017 382.017 0 210.625-171.392 382.017-382.017 382.017z"  ></path>' +
    '' +
    '<path d="M512 352c-88.224 0-160 71.776-160 160s71.774 160 160 160 160-71.774 160-160-71.776-160-160-160z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.983C266.08 65.983 65.983 266.08 65.983 512c0 245.952 200.065 446.017 446.017 446.017S958.017 757.952 958.017 512c0-245.92-200.065-446.017-446.017-446.017z m0 606.018C423.776 672 352 600.226 352 512s71.774-160 160-160 160 71.776 160 160-71.776 160-160 160z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s-check-none" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 928H192c-52.929 0-96-43.071-96-95.998v-640C96 139.072 139.07 96 192 96h640c52.927 0 96 43.072 96 96v640c0 52.928-43.071 96-96 96zM192 160c-17.632 0-32 14.37-32 32.002v640C160 849.666 174.367 864 192 864h640c17.665 0 32-14.336 32-32v-640c0-17.631-14.337-32-32-32H192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s-check" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M726.977 393.184c-12.544-12.447-32.832-12.32-45.248 0.256L448.447 629.25 345.184 523.137c-12.353-12.704-32.608-12.928-45.248-0.64-12.673 12.32-12.96 32.608-0.64 45.248l126.016 129.503c0.064 0.097 0.193 0.097 0.257 0.193 0.063 0.064 0.096 0.193 0.16 0.256 2.016 1.984 4.512 3.2 6.88 4.545 1.248 0.673 2.24 1.792 3.52 2.303 3.872 1.6 8 2.4 12.096 2.4 4.065 0 8.128-0.8 11.968-2.336 1.247-0.513 2.209-1.536 3.392-2.176 2.4-1.344 4.896-2.529 6.944-4.545 0.064-0.064 0.097-0.193 0.193-0.256 0.064-0.097 0.16-0.127 0.256-0.193l256.224-259.008c12.446-12.542 12.318-32.8-0.225-45.247z"  ></path>' +
    '' +
    '<path d="M832 928H192c-52.929 0-96-43.071-96-95.998v-640C96 139.072 139.07 96 192 96h640c52.927 0 96 43.072 96 96v640c0 52.928-43.071 96-96 96zM192 160c-17.632 0-32 14.37-32 32.002v640C160 849.666 174.367 864 192 864h640c17.665 0 32-14.336 32-32v-640c0-17.631-14.337-32-32-32H192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s-check-fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 96H192c-52.929 0-96 43.073-96 96.002v640C96 884.929 139.07 928 192 928h640c52.927 0 96-43.072 96-96v-640c0-52.93-43.071-96-96-96zM727.231 438.433L471.008 697.44c-0.064 0.064-0.193 0.096-0.257 0.193-0.096 0.063-0.096 0.192-0.192 0.256-2.05 1.984-4.576 3.2-6.945 4.545-1.183 0.672-2.143 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.967 2.336-4.096 0-8.225-0.8-12.097-2.4-1.28-0.543-2.303-1.632-3.52-2.303-2.368-1.344-4.831-2.529-6.88-4.545-0.064-0.063-0.097-0.192-0.16-0.256-0.064-0.096-0.193-0.096-0.256-0.193L299.325 567.745c-12.32-12.673-12.033-32.928 0.64-45.248 12.673-12.288 32.895-12.064 45.248 0.64l103.263 106.112 233.28-235.809c12.417-12.576 32.705-12.672 45.248-0.256 12.516 12.448 12.644 32.705 0.227 45.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-correct_big" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 43.008c-260.096 0-471.04 210.944-471.04 471.04s210.944 471.04 471.04 471.04 471.04-210.944 471.04-471.04-210.944-471.04-471.04-471.04z m206.848 276.48L496.64 704.512c-8.192 13.312-25.6 16.384-37.888 7.168L289.792 571.392c-8.192-6.144-10.24-17.408-5.12-26.624 6.144-11.264 21.504-13.312 30.72-5.12L471.04 667.648l212.992-368.64c6.144-10.24 18.432-13.312 27.648-7.168 10.24 5.12 13.312 17.408 7.168 27.648z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)