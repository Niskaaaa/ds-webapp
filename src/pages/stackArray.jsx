import React from "react";

class Demo extends React.Component {
  componentDidMount() {
    var scriptGroup=[
        "../AnimationLibrary/CustomEvents.js",
        "../AnimationLibrary/UndoFunctions.js",
        "../AnimationLibrary/AnimatedObject.js",
        "../AnimationLibrary/AnimatedLabel.js",
        "../AnimationLibrary/AnimatedCircle.js",
        "../AnimationLibrary/AnimatedRectangle.js",
        "../AnimationLibrary/AnimatedLinkedList.js",
        "../AnimationLibrary/HighlightCircle.js",
        "../AnimationLibrary/Line.js",
        "../AnimationLibrary/ObjectManager.js",
        "../AnimationLibrary/AnimationMain.js",
        "../AlgorithmLibrary/Algorithm.js",
        "../AlgorithmLibrary/StackArray.js",
        "../ThirdParty/jquery-1.5.2.min.js",
        "../ThirdParty/jquery-ui-1.8.11.custom.min.js"
    ]
    for(var scriptNum = 0;scriptNum<scriptGroup.length;scriptNum++){
      var script = document.createElement("script");
      script.id = script+scripttNum;
      script.src = scriptGroup[scriptNum];
      document.getElementById('main').appendChild(script);
    
    }

  }

  render() {
    return <div id="main">
        	<div id = "container">
			
			<div id="header">  
				<h1>Stack (Array Implementaion)</h1>
			</div>
			
			<div  id = "mainContent"> 
				
				<div id = "algoControlSection">
					
					<table id="AlgorithmSpecificControls"> </table> 
				</div>
				
				
									
				<canvas id="canvas" width="1000" height="500"></canvas>
				
				<div id = "generalAnimationControlSection">
				
				

					<table id="GeneralAnimationControls">  </table>		
				</div>
				
			</div> 
			<div id="footer">  
				<p><a href="Algorithms.html">Algorithm Visualizations</a></p>
			</div>

		</div>
    </div>;
  }
}

export default Demo;
