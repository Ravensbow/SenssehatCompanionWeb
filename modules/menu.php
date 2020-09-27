<div style="min-height: 800px">
    <table id="measure-tab" style="width:100%">
     <tr>
        <th>Nazwa</th>
        <th>Wartość</th>
        <th>Jednostka</th>
     </tr>
    </table>
</div>

<?php
ob_start();
echo '<script type="text/javascript" src="measure.js"></script>';
$scripts = ob_get_contents();
ob_end_clean();