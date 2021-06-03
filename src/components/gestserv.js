import React from 'react';
import SimpleMenu from './menu';
import SimpleAccordion from './accordion'

export default  class  Gestserv extends React.Component {
    
    render()
    {
       return (
           <div className="container" Style="position:relative; height:100%; width:100%;">
                  <SimpleMenu/>
                  <div className="row" Style="display:flex; justify-content:center; padding:5%;">
                        <div className="col-6" Style="margin-bottom:5%;" >
                              <div Style="position:relative;
                                          border: #f2f2f2 solid 3px; border-style:outset; padding:0 5% 5% 5%; min-height:200px;">
                                   <button Style=" border:none; position:absolute; top:0; right:0;
                                                  background-color:transparent;
                                                  font-size:1.4em;font-weight:bold;color:red;">
                                                  X
                                   </button>
                                    <h4 Style="margin:2% 0 5% 0; ">Médécine Générale</h4>
                                    <div Style="display:flex">
                                           <div Style="flex:2;"> 
                                                <SimpleAccordion/>
                                           </div>
                                          <div Style="display:flex;justify-content:center; flex-direction:column;"> 
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                                <i class="fa fa-plus-circle fa-2x"></i>
                                           </button>
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                           <i class="fa fa-plus-circle fa-2x"></i>
                                            </button>
                                          </div>
                                    </div>
                                    
                              </div>
                                
                        </div>
                        <div className="col-6" Style="margin-bottom:5%;" >
                              <div Style="position:relative;
                                          border: #f2f2f2 solid 3px; border-style:outset; padding:0 5% 5% 5%; min-height:200px;">
                                   <button Style=" border:none; position:absolute; top:0; right:0;
                                                  background-color:transparent;
                                                  font-size:1.4em;font-weight:bold;color:red;">
                                                  X
                                   </button>
                                    <h4 Style="margin:2% 0 5% 0; ">Chirugie</h4>
                                    <div Style="display:flex">
                                           <div Style="flex:2;"> 
                                                <SimpleAccordion/>
                                           </div>
                                          <div Style="display:flex;justify-content:center; flex-direction:column;"> 
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                                <i class="fa fa-plus-circle fa-2x"></i>
                                           </button>
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                           <i class="fa fa-plus-circle fa-2x"></i>
                                            </button>
                                          </div>
                                    </div>
                                    
                              </div>
                                
                        </div>
                        <div className="col-6" Style="margin-bottom:5%;" >
                              <div Style="position:relative;
                                          border: #f2f2f2 solid 3px; border-style:outset; padding:0 5% 5% 5%; min-height:200px;">
                                   <button Style=" border:none; position:absolute; top:0; right:0;
                                                  background-color:transparent;
                                                  font-size:1.4em;font-weight:bold;color:red;">
                                                  X
                                   </button>
                                    <h4 Style="margin:2% 0 5% 0; ">Pharmacie</h4>
                                    <div Style="display:flex">
                                           <div Style="flex:2;"> 
                                                <SimpleAccordion/>
                                           </div>
                                          <div Style="display:flex;justify-content:center; flex-direction:column;"> 
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                                <i class="fa fa-plus-circle fa-2x"></i>
                                           </button>
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                           <i class="fa fa-plus-circle fa-2x"></i>
                                            </button>
                                          </div>
                                    </div>
                                    
                              </div>
                                
                        </div>
                        <div className="col-6" Style="margin-bottom:5%;" >
                              <div Style="position:relative;
                                          border: #f2f2f2 solid 3px; border-style:outset; padding:0 3% 3% 3%; min-height:200px;">
                                   <button Style=" border:none; position:absolute; top:0; right:0;
                                                  background-color:transparent;
                                                  font-size:1.4em;font-weight:bold;color:red;">
                                                  X
                                   </button>
                                    <h4 Style="margin:2% 0 5% 0; ">Urgence</h4>
                                    <div Style="display:flex">
                                           <div Style="flex:2;"> 
                                                <SimpleAccordion/>
                                           </div>
                                          <div Style="display:flex;justify-content:center; flex-direction:column;"> 
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                                <i class="fa fa-plus-circle fa-2x"></i>
                                           </button>
                                           <button Style="display:flex;background-color:transparent; border:none; width:100%; margin:auto; padding:30%;">
                                           <i class="fa fa-plus-circle fa-2x"></i>
                                            </button>
                                          </div>
                                    </div>
                                    
                              </div>
                                
                        </div>
                                
                                
                  </div>
           </div>
       )     
    }
}

