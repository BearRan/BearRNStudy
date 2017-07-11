//
//  StudyFlexBoxVC.m
//  BearRNTest2
//
//  Created by apple on 2017/7/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "StudyFlexBoxVC.h"

@interface StudyFlexBoxVC ()

@end

@implementation StudyFlexBoxVC

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self crateUI];
}

- (void)crateUI
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"DemoFile/1-5StudyFlexBlox.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BearRNTest2"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
}

@end
